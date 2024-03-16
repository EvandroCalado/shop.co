import { Meta, StoryFn } from '@storybook/react';
import { ProductGallery, ProductGalleryProps } from '.';

export default {
  title: 'Components/ProductGallery',
  component: ProductGallery,
  args: {
    images: {
      data: [
        {
          id: 1,
          attributes: {
            name: 'example',
            url: 'https://res.cloudinary.com/dnhsdenji/image/upload/v1710112082/medium_01_9f095971bb.png',
            formats: {
              thumbnail: {
                url: 'https://res.cloudinary.com/dnhsdenji/image/upload/v1710112183/thumbnail_03_117594e614.png',
              },
            },
          },
        },
        {
          id: 2,
          attributes: {
            name: 'example',
            url: 'https://res.cloudinary.com/dnhsdenji/image/upload/v1710112184/medium_03_117594e614.png',
            formats: {
              thumbnail: {
                url: 'https://res.cloudinary.com/dnhsdenji/image/upload/v1710112082/thumbnail_01_9f095971bb.png',
              },
            },
          },
        },
        {
          id: 3,
          attributes: {
            name: 'example',
            url: 'https://res.cloudinary.com/dnhsdenji/image/upload/v1710112128/02_16af270799.png',
            formats: {
              thumbnail: {
                url: 'https://res.cloudinary.com/dnhsdenji/image/upload/v1710112128/thumbnail_02_16af270799.png',
              },
            },
          },
        },
      ],
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<ProductGalleryProps> = (args) => (
  <ProductGallery {...args} />
);
