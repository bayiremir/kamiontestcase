export interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  phone: string;
  status: number;
  type: number;
  type_value: string;
  token: string;
  created_at: number;
  updated_at: number;
  email_verified_at: number | null;
  phone_verified_at: number | null;
}

export interface LoginResponse {
  data: User;
  error_code: number;
  message: string | null;
  status: number;
  success: boolean;
}

export interface userSliceInitialStateType {
  user: User | null;
  authLogin: boolean;
}
