export interface Shipment {
  data: ShipmentData[];
  links: Links;
  meta: Meta;
  success: boolean;
  status: number;
  message: string;
  error_code: number;
  additional: Additional;
}

export interface ShipmentData {
  id: number;
  customer_order_number?: string;
  shipper: Shipper;
  carrier?: Carrier;
  driver?: Driver;
  vehicle?: Vehicle;
  code: string;
  trailer?: Trailer;
  departure_address: DepartureAddress;
  delivery_address: DeliveryAddress;
  pick_up_date: number;
  assigned_time?: number;
  has_additional_invoice: boolean;
  time_interval: TimeInterval;
  delivery_date: any;
  delivery_time: any;
  invoice_ready: boolean;
  type: number;
  type_value: string;
  status: number;
  is_invoice_created: boolean;
  latest_status: LatestStatus;
  planned_transport: any;
  payment_type: any;
  payment_status: any;
  carrier_invoice_upload: boolean;
  carrier_payment: boolean;
  carrier_payment_status: number;
  carrier_payment_status_value: string;
  carrier_payment_date: string;
  shipment_detail: ShipmentDetail;
  creator: Creator;
  driver_last_location?: DriverLastLocation;
  price: Price;
  view_count?: number;
  viewer_count?: number;
  carrier_payment_receipt_upload: boolean;
  created_at: number;
  load_reception?: number;
  load_reception_value?: string;
  boosted: boolean;
}

export interface Shipper {
  id: number;
  name: string;
  tax_number: string;
  tax_office: string;
  sector: Sector;
  settings: Settings;
  phone: string;
  created_at: number;
}

export interface Sector {
  id: number;
  name: string;
}

export interface Settings {
  type: number;
  tag: any;
  billing_cycle: number;
  monthly_transport?: number;
  use_balance: boolean;
  use_negative_balance: boolean;
  negative_balance: any;
  settings: any;
  tax_office: any;
  head_office_city: any;
  region_fuel_price: string;
  region_fuel_price_currency: string;
  creator: any;
  profit_margin?: string;
  created_at: number;
}

export interface Carrier {
  id: number;
  name?: string;
  bank?: string;
  iban?: string;
}

export interface Driver {
  user_id: number;
  name: string;
  surname: string;
  type: number;
  type_value: string;
  phone: string;
}

export interface Vehicle {
  id: number;
  type: number;
  type_value: string;
  group_type?: number;
  group_type_value?: string;
  plate: string;
}

export interface Trailer {
  id: number;
  vehicle_type: number;
  vehicle_type_value: string;
  type: number;
  type_value: string;
  plate: string;
}

export interface DepartureAddress {
  id: number;
  name: string;
  type: number;
  type_value?: string;
  city: City;
  district: District;
  neighborhood: any;
  address: string;
  building_number: any;
  for_directions?: string;
  lat: string;
  lng: string;
  responsible: string;
  responsible_phone: string;
  responsible_title?: string;
  delivery_address: boolean;
  created_at: number;
}

export interface City {
  id: number;
  name: string;
  lat: string;
  long: string;
  country_id: number;
}

export interface District {
  id: number;
  city_id: number;
  name: string;
  lat: string;
  long: string;
}

export interface DeliveryAddress {
  id: number;
  name: string;
  type: number;
  type_value: string;
  city: City2;
  district: District2;
  neighborhood: any;
  address: string;
  building_number: any;
  for_directions?: string;
  lat: string;
  lng: string;
  responsible: string;
  responsible_phone?: string;
  responsible_title?: string;
  delivery_address: boolean;
  created_at: number;
}

export interface City2 {
  id: number;
  name: string;
  lat: string;
  long: string;
  country_id: number;
}

export interface District2 {
  id: number;
  city_id: number;
  name: string;
  lat: string;
  long: string;
}

export interface TimeInterval {
  start: string;
  end: string;
}

export interface LatestStatus {
  id: number;
  type: number;
  type_value: string;
  created_at: number;
}

export interface ShipmentDetail {
  id: number;
  shipment_id: number;
  vehicle_type: number;
  vehicle_type_value: string;
  group_type: number;
  group_type_value?: string;
  trailer_type: number[];
  trailer_type_value: string[];
  base_type: number;
  base_type_value: string;
  tonnage: Tonnage;
  type_of_goods: string;
  way_of_loading: number;
  way_of_loading_value: string;
  commodity_avg_value: string;
  package_type: number;
  package_type_value: string;
  distance: number;
  toll: string;
  fuel_liter: string;
  departure_km: any;
  delivery_km: any;
  empty_km: any;
}

export interface Tonnage {
  min: number;
  max: number;
}

export interface Creator {
  id: number;
  tckn: any;
  name: string;
  surname: string;
  email: string;
  phone: string;
  type: number;
  type_value: string;
  status: number;
  status_value: string;
  phone_verified_at?: number;
  email_verified_at?: number;
  avatar: any;
  creator: any;
  created_at: number;
  updated_at: number;
}

export interface DriverLastLocation {
  id: number;
  driver: Driver2;
  lat: string;
  lng: string;
}

export interface Driver2 {
  id: number;
  tckn: string;
  name: string;
  surname: string;
  email: any;
  phone: string;
  type: number;
  type_value: string;
  status: number;
  status_value: string;
  phone_verified_at: number;
  email_verified_at: any;
  avatar: any;
  creator: any;
  created_at: number;
  updated_at: number;
}

export interface Price {
  shipper: Shipper2;
  carrier: Carrier2;
  offers: Offers;
  kamion: Kamion;
}

export interface Shipper2 {
  id: number;
  freight_price: string;
  freight_price_tax_free: string;
  price_details: PriceDetails;
  status: number;
  status_value: string;
  giving_price_user: GivingPriceUser;
  price_confirming_user: PriceConfirmingUser;
  created_at: number;
}

export interface PriceDetails {
  base_price: string;
  base_currency: BaseCurrency;
  converting_currency: ConvertingCurrency;
  converting_exchange: string;
}

export interface BaseCurrency {
  id: number;
  name: string;
  code: string;
  value: string;
  updated_at: string;
}

export interface ConvertingCurrency {
  id: number;
  name: string;
  code: string;
  value: string;
  updated_at: string;
}

export interface GivingPriceUser {
  id: number;
  name: string;
  surname: string;
}

export interface PriceConfirmingUser {
  id: number;
  name: string;
  surname: string;
  email: string;
  phone: string;
}

export interface Carrier2 {
  id: number;
  carrier_price: string;
  carrier_price_tax_free: string;
  carrier_cash_price_tax_free: string;
  cash_payment: boolean;
  price_details: PriceDetails2;
  giving_price_user: GivingPriceUser2;
  created_at: number;
}

export interface PriceDetails2 {
  base_price: string;
  base_currency: BaseCurrency2;
  converting_currency: ConvertingCurrency2;
  converting_exchange: string;
}

export interface BaseCurrency2 {
  id: number;
  name: string;
  code: string;
  value: string;
  updated_at: string;
}

export interface ConvertingCurrency2 {
  id: number;
  name: string;
  code: string;
  value: string;
  updated_at: string;
}

export interface GivingPriceUser2 {
  id: number;
  name: string;
  surname: string;
}

export interface Offers {
  carrier_price_offer: string;
  carrier_price_offer_currency: string;
  carrier_target_price_tax_free: string;
  carrier_target_price_currency: string;
}

export interface Kamion {
  kamion_share_percent: string;
  kamion_share: string;
  kamion_share_currency: string;
}

export interface Links {
  first: string;
  last: string;
  prev: any;
  next: string;
}

export interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  links: Link[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface Link {
  url?: string;
  label: string;
  active: boolean;
}

export interface Additional {
  filters: any;
}
