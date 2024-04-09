import { Meta, StoryFn } from '@storybook/react';
import { Quantity, QuantityProps } from '.';

export default {
  title: 'Components/Quantity',
  component: Quantity,
  args: {
    activeQuantity: 1,
  },
} as Meta;

export const Default: StoryFn<QuantityProps> = (args) => <Quantity {...args} />;
