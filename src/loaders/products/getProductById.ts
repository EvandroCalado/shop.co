import { customFetch } from '@/utils/customFetch';
import { AxiosError } from 'axios';

export const getProductById = async (id: string) => {
  const populate = '?populate=deep,3';

  try {
    const { data } = await customFetch.get(`/products/${id}${populate}`);

    if (!data) {
      throw new Error('No product found');
    }

    return data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.error?.message);
    }
  }
};
