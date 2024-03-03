import { Meta } from '@storybook/react';
import { Menu } from '.';

export default {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <Menu />;
