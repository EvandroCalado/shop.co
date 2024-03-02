import { Meta } from '@storybook/react';
import { HeaderInfo } from '.';

export default {
  title: 'Components/HeaderInfo',
  component: HeaderInfo,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <HeaderInfo />;
