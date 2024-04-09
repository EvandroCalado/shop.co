import { customFetch } from '@/utils/customFetch';

export const getOrderById = async (id: string) => {
  const orderIdFilter = `?filters[orderId][$eq]=${id}`;
  const { data } = await customFetch.get(`/orders${orderIdFilter}`);

  if (!data) {
    throw new Error('No order found');
  }

  return data;
};
