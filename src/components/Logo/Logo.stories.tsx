import { Meta } from '@storybook/react';
import { Logo } from '.';

export default {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <Logo />;
