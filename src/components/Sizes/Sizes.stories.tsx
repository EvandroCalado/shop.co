import { Meta, StoryFn } from '@storybook/react';
import { Sizes, SizesProps } from '.';

import mock from '../../mocks/products.json';

export default {
  title: 'Components/Sizes',
  component: Sizes,
  args: {
    title: 'Sizes',
    sizes: mock.data[0].attributes.sizes,
    activeSize: 's',
  },
} as Meta;

export const Default: StoryFn<SizesProps> = (args) => <Sizes {...args} />;
