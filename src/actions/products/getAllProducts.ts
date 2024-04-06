import { ProductsType } from '@/types';
import { AxiosError } from 'axios';

export enum HttpStatusCode {
  OK = 200,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}

export type HttpResponse<T> = {
  statusCode: HttpStatusCode;
  data?: T;
};

export type LoadProducts = {
  loadAll: () => Promise<HttpResponse<ProductsType>>;
};

export interface FiltersProps {
  loadProducts: LoadProducts;
}

export const getAllProducts = async ({ loadProducts }: FiltersProps) => {
  try {
    const response = await loadProducts.loadAll();

    if (!response) {
      throw new Error('No products found');
    }

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.error?.message);
    }
  }
};
