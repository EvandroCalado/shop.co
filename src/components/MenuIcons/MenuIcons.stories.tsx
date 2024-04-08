import { Meta } from '@storybook/react';
import { MenuIcons } from '.';

export default {
  title: 'Components/MenuIcons',
  component: MenuIcons,
} as Meta;

export const Default = () => <MenuIcons />;

Default.parameters = {
  nextjs: {
    appDirectory: true,
    navigation: {
      pathname: '/wishlist',
    },
  },
};
