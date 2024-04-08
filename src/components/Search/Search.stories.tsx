import { Meta } from '@storybook/react';
import { Search } from '.';

export default {
  title: 'Components/Search',
  component: Search,
} as Meta;

export const Default = () => <Search />;

Default.parameters = {
  nextjs: {
    appDirectory: true,
    navigation: {
      query: {
        q: 'test',
      },
    },
  },
};
