export interface OrdersType {
  data: Datum4[];
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

interface Datum4 {
  id: number;
  attributes: Attributes11;
}

interface Attributes11 {
  stripeId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  orderId: string;
  cartItems: CartItem[];
  userId: User;
}

interface CartItem {
  id: string;
  size: string;
  color: string;
  amount: number;
  product: Product2;
  quantity: number;
}

interface Product2 {
  id: number;
  attributes: Attributes10;
}

interface Attributes10 {
  tag: Tag;
  name: string;
  slug: string;
  brand: Tag;
  cover: Cover;
  price: number;
  sizes: Sizes;
  colors: Colors;
  images: Images;
  details: string;
  ratings: Ratings;
  discount: number;
  createdAt: string;
  updatedAt: string;
  categories: Sizes;
  description: string;
  dress_style: Dressstyle;
  publishedAt: string;
}

interface Dressstyle {
  data: Data6;
}

interface Data6 {
  id: number;
  attributes: Attributes9;
}

interface Attributes9 {
  name: string;
  slug: string;
  image: Image;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Image {
  data: Data5;
}

interface Data5 {
  id: number;
  attributes: Attributes8;
}

interface Attributes8 {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  size: number;
  width: number;
  height: number;
  caption?: string;
  formats: Formats3;
  provider: string;
  createdAt: string;
  updatedAt: string;
  previewUrl?: string;
  alternativeText?: string;
  provider_metadata: Providermetadata;
}

interface Formats3 {
  small: Small;
  thumbnail: Small;
}

interface Ratings {
  data: Datum3[];
}

interface Datum3 {
  id: number;
  attributes: Attributes7;
}

interface Attributes7 {
  rate: string;
  user: User;
  product: Product;
  createdAt: string;
  updatedAt: string;
  avaliation: string;
  publishedAt: string;
}

interface Product {
  data: Data4;
}

interface Data4 {
  id: number;
  attributes: Attributes6;
}

interface Attributes6 {
  name: string;
  slug: string;
  price: number;
  details: string;
  discount: number;
  createdAt: string;
  updatedAt: string;
  description: string;
  publishedAt: string;
}

interface User {
  data: Data3;
}

interface Data3 {
  id: number;
  attributes: Attributes5;
}

interface Attributes5 {
  email: string;
  blocked: boolean;
  provider: string;
  username: string;
  confirmed: boolean;
  createdAt: string;
  updatedAt: string;
}

interface Images {
  data: Datum2[];
}

interface Datum2 {
  id: number;
  attributes: Attributes4;
}

interface Attributes4 {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  size: number;
  width: number;
  height: number;
  caption?: string;
  formats: Formats2;
  provider: string;
  createdAt: string;
  updatedAt: string;
  previewUrl?: string;
  alternativeText?: string;
  provider_metadata: Providermetadata;
}

interface Formats2 {
  small: Small;
  medium?: Small;
  thumbnail: Small;
}

interface Colors {
  data: Datum[];
}

interface Datum {
  id: number;
  attributes: Attributes3;
}

interface Attributes3 {
  name: string;
  slug: string;
  color: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Sizes {
  data: Data[];
}

interface Cover {
  data: Data2;
}

interface Data2 {
  id: number;
  attributes: Attributes2;
}

interface Attributes2 {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  size: number;
  width: number;
  height: number;
  caption?: string;
  formats: Formats;
  provider: string;
  createdAt: string;
  updatedAt: string;
  previewUrl?: string;
  alternativeText?: string;
  provider_metadata: Providermetadata;
}

interface Formats {
  small: Small;
  medium: Small;
  thumbnail: Small;
}

interface Small {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: string;
  size: number;
  width: number;
  height: number;
  provider_metadata: Providermetadata;
}

interface Providermetadata {
  public_id: string;
  resource_type: string;
}

interface Tag {
  data: Data;
}

interface Data {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
