import { ProductsType } from '@/types';
import { AxiosError } from 'axios';

export enum HttpStatusCode {
  OK = 200,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}

export type HttpResponse<T> = {
  status: HttpStatusCode;
  data?: T;
};

export type LoadItems = {
  loadAll: () => Promise<HttpResponse<ProductsType>>;
};

export interface GetAllProductsProps {
  loadProducts: LoadItems;
}

export const getAllProducts = async ({ loadProducts }: GetAllProductsProps) => {
  try {
    const response = await loadProducts.loadAll();

    if (!(response.status === HttpStatusCode.OK)) {
      throw new Error('No products found');
    }

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.error?.message);
    }
  }
};
