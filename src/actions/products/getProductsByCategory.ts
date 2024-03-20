import { customFetch } from '@/utils/customFetch';
import { AxiosError } from 'axios';

export const getProductsByCategory = async (slug: string) => {
  const filters = `?filters[categories][slug][$eq]=${slug}`;
  const populate = '&populate=*';
  const { data } = await customFetch.get(`/products${filters}${populate}`);

  try {
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
