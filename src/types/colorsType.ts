export interface ColorsType {
  data: Datum[];
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

interface Datum {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  color: string;
}
