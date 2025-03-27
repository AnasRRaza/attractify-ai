import { getCookie } from 'cookies-next';

export const getAuthToken = (): string => {
  const token = getCookie('token');
  if (!token) return '';
  return `Bearer ${token}`;
};
