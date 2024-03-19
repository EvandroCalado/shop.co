export interface RatingsType {
  data: RatingType[];
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

export interface RatingType {
  id: number;
  attributes: Attributes3;
}

interface Attributes3 {
  rate: string;
  avaliation: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  user: User;
  product: Product;
}

interface Product {
  data: Data2;
}

interface Data2 {
  id: number;
  attributes: Attributes2;
}

interface Attributes2 {
  name: string;
  slug: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  details: string;
  price: number;
  discount: number;
}

interface User {
  data: Data;
}

interface Data {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
}
