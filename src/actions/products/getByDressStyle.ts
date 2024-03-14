import { customFetch } from '@/utils/customFetch';
import { AxiosError } from 'axios';

export const getByDressStyle = async (dressStyle = '') => {
  const filters = dressStyle && `&filters[slug][$eq]=${dressStyle}`;
  const populate = '?populate=*';

  try {
    const { data } = await customFetch.get(
      `/dress-styles${populate}${filters}`,
    );

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
