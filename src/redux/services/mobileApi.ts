import {createApi} from '@reduxjs/toolkit/query/react';
import {fetchBaseQuery} from '@reduxjs/toolkit/query';
import {BASEURL} from '@env';
import {storage} from '../../utils/Storage';
import {Shipment} from '../../interface/shipments.interface';
import {clearUser} from '../slices/userSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: BASEURL,
  prepareHeaders: headers => {
    headers.set('Content-Type', 'application/json');
    // Token'ı her seferinde dinamik olarak al
    const storedUser = storage.getString('user');
    const token = storedUser ? JSON.parse(storedUser).token : null;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});
const baseQueryWithCheck = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQuery(args, api, extraOptions);
  // Unauthorized kontrolü ve hata işlemleri yapılabilir
  if (result.error?.status === 401) {
    console.error('Unauthorized, logging out...');
    // Kullanıcıyı otomatik olarak çıkış yap
    api.dispatch(clearUser());
  }
  return result;
};
export const mobileApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithCheck,
  endpoints: builder => ({
    login: builder.mutation({
      query: ({email, password}) => ({
        url: '/login',
        method: 'POST',
        body: {email, password},
      }),
    }),
    shipments: builder.query<Shipment, void>({
      query: () => ({
        url: '/shipment',
        method: 'GET',
      }),
    }),
    shipmentById: builder.query<Shipment, {id: string}>({
      query: ({id}) => ({
        url: `/shipment?filter[id]=${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {useLoginMutation, useShipmentsQuery, useShipmentByIdQuery} =
  mobileApi;
