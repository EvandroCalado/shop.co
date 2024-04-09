import { customFetch } from '@/utils/customFetch';
import { AxiosError } from 'axios';

export const getAllColors = async () => {
  try {
    const { data } = await customFetch.get('/colors');

    if (!data) {
      throw new Error('No colors found');
    }

    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.error?.message);
    }
  }
};
