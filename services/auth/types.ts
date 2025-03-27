export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  name: string;
  email: string;
  _id: string;
  token: string;
}

export interface ISignupRequest {
  name: string;
  email: string;
  password: string;
}
