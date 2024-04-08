import { StoryFn } from '@storybook/react';
import { BrowseBy, BrowseByProps } from '.';

import mock from '../../mocks/productsByDressStyle.json';

export default {
  title: 'Components/BrowseBy',
  component: BrowseBy,
  args: {
    productsByDressStyle: mock,
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default: StoryFn<BrowseByProps> = (args) => <BrowseBy {...args} />;
