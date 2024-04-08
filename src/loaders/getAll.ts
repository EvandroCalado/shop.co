import { AxiosError } from 'axios';

export enum HttpStatusCode {
  OK = 200,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode;
  body: T;
};

export type LoadItems = {
  loadAll: () => Promise<HttpResponse>;
};

export interface GetAllProductsProps {
  loadAllItems: LoadItems;
}

export const getAll = async ({ loadAllItems }: GetAllProductsProps) => {
  try {
    const response = await loadAllItems.loadAll();

    if (!(response.statusCode === HttpStatusCode.OK)) {
      throw new Error('Not found');
    }

    return response.body;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.error?.message);
    }
  }
};
