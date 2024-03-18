import { customFetch } from '@/utils/customFetch';

export const getByCategory = async (slug: string) => {
  const filters = `?filters[categories][slug][$eq]=${slug}`;
  const populate = '&populate=*';
  const { data } = await customFetch.get(`/products${filters}${populate}`);

  if (!data) {
    throw new Error('No products found');
  }

  return data;
};
