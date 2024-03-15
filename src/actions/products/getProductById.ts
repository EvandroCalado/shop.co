import { customFetch } from '@/utils/customFetch';

export const getProductById = async (id: string) => {
  const populate = '?populate=*';

  const { data } = await customFetch.get(`/products/${id}${populate}`);

  if (!data) {
    throw new Error('No product found');
  }

  return data.data;
};
