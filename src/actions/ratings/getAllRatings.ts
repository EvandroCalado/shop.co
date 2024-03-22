import { customFetch } from '@/utils/customFetch';

export const getAllRatings = async () => {
  const populate = '?populate=*';
  const { data } = await customFetch.get(`/ratings${populate}`);

  if (!data) {
    throw new Error('No ratings found');
  }

  return data;
};
