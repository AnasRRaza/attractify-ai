export enum ROUTES {
  DASHBOARD = '/',
  SIGNIN = '/signin',
  SIGNUP = '/signup',
  OTP = '/otp',
}

export const PROTECTED_ROUTES = [ROUTES.DASHBOARD];

export const PUBLIC_ROUTES = [ROUTES.SIGNIN, ROUTES.SIGNUP, ROUTES.OTP];
