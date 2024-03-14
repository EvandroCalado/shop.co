import { customFetch } from '@/utils/customFetch';
import { AxiosError } from 'axios';

export const getByTagSlug = async (tag: string) => {
  const filters = `?filters[tag][slug][$eq]=${tag}`;
  const populate = '&populate=*';

  try {
    const { data } = await customFetch.get(`/products${filters}${populate}`);

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
