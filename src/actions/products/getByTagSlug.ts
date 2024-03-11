import { customFetch } from '@/utils/customFetch';
import { AxiosError } from 'axios';

export const getByTagSlug = async (tag: string) => {
  const filters = `?filters[tag][slug][$eq]=${tag}`;
  const populate = '&populate=*';

  try {
    const res = await customFetch.get(
      `${process.env.NEXT_PUBLIC_API_URL}/products${filters}${populate}`,
    );
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.error?.message);
    }
  }
};
