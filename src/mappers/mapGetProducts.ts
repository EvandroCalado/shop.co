import { ProductsType } from '@/types';

export interface CoverProps {
  id: number;
  thumbnail: string;
  small: string;
  medium?: string;
  large?: string;
}

export interface ImagesProps {
  id: number;
  thumbnail: string;
  small: string;
  medium?: string;
  large?: string;
}

export interface ColorsProps {
  id: number;
  name: string;
  slug: string;
  color: string;
}

export interface SizesProps {
  id: number;
  name: string;
  slug: string;
}

export interface BrandProps {
  id: number;
  name: string;
  slug: string;
}

export interface CategoriesProps {
  id: number;
  name: string;
  slug: string;
}

export interface TagProps {
  id: number;
  name: string;
  slug: string;
}

export interface DressStyleProps {
  id: number;
  name: string;
  slug: string;
}

export interface RatingProps {
  id: number;
  avaliation: string;
  rate: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
  product: {
    id: number;
    name: string;
    slug: string;
  };
  createdAt: string;
}

export interface PaginationProps {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface ProductProps {
  id: number;
  slug: string;
  name: string;
  description: string;
  details: string;
  price: number;
  discount: number;
  cover: CoverProps;
  images: ImagesProps[];
  colors: ColorsProps[];
  sizes: SizesProps[];
  brand: BrandProps;
  categories: CategoriesProps[];
  tag: TagProps;
  dressStyle: DressStyleProps;
  ratings: RatingProps[];
}

export interface MapGetAllProductsProps {
  products: ProductProps[];
  pagination: PaginationProps;
}

export const mapGetProducts = (
  products: ProductsType,
): MapGetAllProductsProps => {
  return {
    products: products.data.map((product) => {
      return {
        id: product.id,
        slug: product.attributes.slug,
        name: product.attributes.name,
        description: product.attributes.description,
        details: product.attributes.details,
        price: product.attributes.price,
        discount: product.attributes.discount,
        cover: {
          id: product.attributes.cover.data.id,
          thumbnail:
            product.attributes.cover.data.attributes.formats.thumbnail.url,
          small: product.attributes.cover.data.attributes.formats.small.url,
          medium: product.attributes.cover.data.attributes.formats.medium.url,
          large: product.attributes.cover.data.attributes.formats.large?.url,
        },
        images: product.attributes.images.data.map((image) => {
          return {
            id: image.id,
            thumbnail: image.attributes.formats.thumbnail.url,
            small: image.attributes.formats.small.url,
            medium: image.attributes.formats.medium?.url,
            large: image.attributes.formats.large?.url,
          };
        }),
        colors: product.attributes.colors.data.map((color) => {
          return {
            id: color.id,
            name: color.attributes.name,
            slug: color.attributes.slug,
            color: color.attributes.color,
          };
        }),
        sizes: product.attributes.sizes.data.map((size) => {
          return {
            id: size.id,
            name: size.attributes.name,
            slug: size.attributes.slug,
          };
        }),
        brand: {
          id: product.attributes.brand.data.id,
          name: product.attributes.brand.data.attributes.name,
          slug: product.attributes.brand.data.attributes.slug,
        },
        categories: product.attributes.categories.data.map((category) => {
          return {
            id: category.id,
            name: category.attributes.name,
            slug: category.attributes.slug,
          };
        }),
        tag: {
          id: product.attributes.tag.data.id,
          name: product.attributes.tag.data.attributes.name,
          slug: product.attributes.tag.data.attributes.slug,
        },
        dressStyle: {
          id: product.attributes.dress_style.data.id,
          name: product.attributes.dress_style.data.attributes.name,
          slug: product.attributes.dress_style.data.attributes.slug,
        },
        ratings: product.attributes.ratings.data.map((rating) => {
          return {
            id: rating.id,
            avaliation: rating.attributes.avaliation,
            rate: rating.attributes.rate,
            user: {
              id: rating.attributes.user.data.id,
              name: rating.attributes.user.data.attributes.username,
              email: rating.attributes.user.data.attributes.email,
            },
            product: {
              id: rating.attributes.product.data.id,
              name: rating.attributes.product.data.attributes.name,
              slug: rating.attributes.product.data.attributes.slug,
            },
            createdAt: rating.attributes.createdAt,
          };
        }),
      };
    }),
    pagination: {
      page: products.meta.pagination.page,
      pageSize: products.meta.pagination.pageSize,
      pageCount: products.meta.pagination.pageCount,
      total: products.meta.pagination.total,
    },
  };
};
