import toast from 'react-hot-toast';

import { SUB_URL } from '@/constants/url';

import { API } from '../api';

import { ILoginRequest, ILoginResponse, ISignupRequest } from './types';

export const login = async (
  payload: ILoginRequest
): Promise<ILoginResponse | null> => {
  const response = await API.Post<ILoginRequest, ILoginResponse>(
    SUB_URL.LOGIN,
    payload
  );
  if (response.status) {
    return response.data;
  }
  toast.error(response.message);
  throw new Error(response.message);
};

export const signup = async (payload: ISignupRequest): Promise<string> => {
  const response = await API.Post<ISignupRequest, null>(
    SUB_URL.SIGNUP,
    payload
  );
  if (response.status) {
    toast.success(response.message);
    return response.message;
  }
  toast.error(response.message);
  throw new Error(response.message);
};
