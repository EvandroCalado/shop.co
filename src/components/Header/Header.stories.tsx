import { Meta } from '@storybook/react';
import { Header } from '.';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <Header />;
