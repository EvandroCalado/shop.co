import { customFetch } from '@/utils/customFetch';

export const getAll = async () => {
  const populate = '?populate=*';
  const { data } = await customFetch.get(`/ratings${populate}`);

  if (!data) {
    throw new Error('No ratings found');
  }

  return data;
};
