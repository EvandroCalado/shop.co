import { customFetch } from '@/utils/customFetch';
import { AxiosError } from 'axios';

export const getAllProducts = async () => {
  try {
    const { data } = await customFetch.get('/products?populate=*');

    if (!data) {
      throw new Error('No products found');
    }

    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.error?.message);
    }
  }
};
