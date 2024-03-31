import { customFetch } from '@/utils/customFetch';
import { AxiosError } from 'axios';

export const getAllOrdersByUser = async (id: string, page = 1) => {
  const populate = '?populate=deep,2';
  const filters = `&filters[userId][id][$eq]=${id}`;
  const sort = `&sort[createdAt]=desc`;
  const pagination = `&pagination[page]=${page}&pagination[pageSize]=6`;

  try {
    const { data } = await customFetch.get(
      `/orders${populate}${filters}${sort}${pagination}`,
    );

    if (!data) {
      throw new Error('No orders found');
    }

    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.error?.message);
    }
  }
};
