import { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonProps } from '.';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'button',
  },
} as Meta;

export const Primary: StoryFn<ButtonProps> = (args) => (
  <Button {...args} variant="primary" />
);

export const Outline: StoryFn<ButtonProps> = (args) => (
  <Button {...args} variant="outline" />
);
