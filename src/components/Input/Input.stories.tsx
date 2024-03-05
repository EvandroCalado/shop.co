import { Meta, StoryFn } from '@storybook/react';
import { Mail } from 'lucide-react';
import { Input, InputProps } from '.';

export default {
  title: 'Components/Input',
  component: Input,
  args: {
    icon: <Mail />,
    placeholder: 'Enter your email address',
  },
} as Meta;

export const Default: StoryFn<InputProps> = (args) => <Input {...args} />;
