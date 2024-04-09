import { Meta, StoryFn } from '@storybook/react';
import { InputRadio, InputRadioProps } from '.';

export default {
  title: 'Components/InputRadio',
  component: InputRadio,
  args: {
    name: 'example',
  },
  argTypes: {
    activeValue: {
      options: ['example'],
      control: { type: 'radio' },
    },
  },
} as Meta;

export const Default: StoryFn<InputRadioProps> = (args) => (
  <InputRadio {...args} />
);
