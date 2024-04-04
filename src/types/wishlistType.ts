import { ProductType } from '.';

export interface WishlistType {
  data: Datum6[];
  meta: Meta;
}

interface Meta {
  pagination: Pagination;
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface Datum6 {
  id: number;
  attributes: Attributes7;
}

interface Attributes7 {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  products: Products;
}

interface Products {
  data: ProductType[];
}
