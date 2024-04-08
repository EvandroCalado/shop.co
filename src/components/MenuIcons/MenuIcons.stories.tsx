import { Meta } from '@storybook/react';
import { MenuIcons } from '.';

export default {
  title: 'Components/MenuIcons',
  component: MenuIcons,
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/wishlist',
      },
    },
  },
} as Meta;

export const Default = () => <MenuIcons />;
