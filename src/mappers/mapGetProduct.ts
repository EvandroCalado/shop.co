import { ProductType } from '@/types';

export const mapGetProduct = (product: ProductType) => {
  return {
    id: product.data.id,
    name: product.data.attributes.name,
    slug: product.data.attributes.slug,
    description: product.data.attributes.description,
    details: product.data.attributes.details,
    price: product.data.attributes.price,
    discount: product.data.attributes.discount,
    cover: {
      id: product.data.attributes.cover.data.id,
      thumbnail:
        product.data.attributes.cover.data.attributes.formats.thumbnail.url,
      small: product.data.attributes.cover.data.attributes.formats.small.url,
      medium: product.data.attributes.cover.data.attributes.formats.medium.url,
    },
    images: product.data.attributes.images.data.map((image) => {
      return {
        id: image.id,
        thumbnail: image.attributes.formats.thumbnail.url,
        small: image.attributes.formats.small.url,
        medium: image.attributes.formats.medium?.url,
      };
    }),
    colors: product.data.attributes.colors.data.map((color) => {
      return {
        id: color.id,
        name: color.attributes.name,
        slug: color.attributes.slug,
        color: color.attributes.color,
      };
    }),
    sizes: product.data.attributes.sizes.data.map((size) => {
      return {
        id: size.id,
        name: size.attributes.name,
        slug: size.attributes.slug,
      };
    }),
    brand: {
      id: product.data.attributes.brand.data.id,
      name: product.data.attributes.brand.data.attributes.name,
      slug: product.data.attributes.brand.data.attributes.slug,
    },
    categories: product.data.attributes.categories.data.map((category) => {
      return {
        id: category.id,
        name: category.attributes.name,
        slug: category.attributes.slug,
      };
    }),
    tag: {
      id: product.data.attributes.tag.data.id,
      name: product.data.attributes.tag.data.attributes.name,
      slug: product.data.attributes.tag.data.attributes.slug,
    },
    dressStyle: {
      id: product.data.attributes.dress_style.data.id,
      name: product.data.attributes.dress_style.data.attributes.name,
      slug: product.data.attributes.dress_style.data.attributes.slug,
    },
    ratings: product.data.attributes.ratings.data.map((rating) => {
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
};
