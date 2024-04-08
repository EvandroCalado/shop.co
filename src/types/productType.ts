import { WishlistType } from './wishlistType';

export interface ProductType {
  data: Data6;
}

interface Data6 {
  id: number;
  attributes: Attributes10;
}

interface Attributes10 {
  name: string;
  slug: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  details: string;
  price: number;
  discount: number;
  cover: Cover;
  images: Images;
  categories: Categories;
  brand: Brand;
  colors: Colors;
  sizes: Categories;
  tag: Brand;
  dress_style: Dressstyle;
  ratings: Ratings;
  wishlists: Wishlists;
}

interface Wishlists {
  data: WishlistType;
}

interface Ratings {
  data: Datum4[];
}

interface Datum4 {
  id: number;
  attributes: Attributes9;
}

interface Attributes9 {
  rate: string;
  avaliation: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  user: User;
  product: Product;
}

interface Product {
  data: Data5;
}

interface Data5 {
  id: number;
  attributes: Attributes8;
}

interface Attributes8 {
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
  data: Data4;
}

interface Data4 {
  id: number;
  attributes: Attributes7;
}

interface Attributes7 {
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
}

interface Dressstyle {
  data: Data3;
}

interface Data3 {
  id: number;
  attributes: Attributes6;
}

interface Attributes6 {
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: Image;
}

interface Image {
  data: Data2;
}

interface Data2 {
  id: number;
  attributes: Attributes5;
}

interface Attributes5 {
  name: string;
  alternativeText?: string;
  caption?: string;
  width: number;
  height: number;
  formats: Formats3;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string;
  provider: string;
  provider_metadata: Providermetadata;
  createdAt: string;
  updatedAt: string;
}

interface Formats3 {
  small: Small;
  thumbnail: Small;
}

interface Colors {
  data: Datum3[];
}

interface Datum3 {
  id: number;
  attributes: Attributes4;
}

interface Attributes4 {
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  color: string;
}

interface Brand {
  data: Datum2;
}

interface Categories {
  data: Datum2[];
}

interface Datum2 {
  id: number;
  attributes: Attributes3;
}

interface Attributes3 {
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Images {
  data: Datum[];
}

interface Datum {
  id: number;
  attributes: Attributes2;
}

interface Attributes2 {
  name: string;
  alternativeText?: string;
  caption?: string;
  width: number;
  height: number;
  formats: Formats2;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string;
  provider: string;
  provider_metadata: Providermetadata;
  createdAt: string;
  updatedAt: string;
}

interface Formats2 {
  small: Small;
  medium?: Small;
  thumbnail: Small;
}

interface Cover {
  data: Data;
}

interface Data {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  name: string;
  alternativeText?: string;
  caption?: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string;
  provider: string;
  provider_metadata: Providermetadata;
  createdAt: string;
  updatedAt: string;
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
