import { Meta, StoryFn } from '@storybook/react';
import { FooterItem, FooterItemProps } from '.';

export default {
  title: 'Components/FooterItem',
  args: {
    title: 'company',
    links: [
      {
        id: 1,
        name: 'about',
        href: '/about',
      },
      {
        id: 2,
        name: 'features',
        href: '/features',
      },
      {
        id: 3,
        name: 'works',
        href: '/works',
      },
      {
        id: 4,
        name: 'career',
        href: '/career',
      },
    ],
  },
  component: FooterItem,
} as Meta;

export const Default: StoryFn<FooterItemProps> = (args) => (
  <FooterItem {...args} />
);
