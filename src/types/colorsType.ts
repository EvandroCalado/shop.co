export interface ColorsType {
  data: Datum[];
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
