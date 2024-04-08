import { Meta, StoryFn } from '@storybook/react';
import { Colors, ColorsProps } from '.';

export default {
  title: 'Components/ Colors',
  component: Colors,
  args: {
    colors: {
      data: [
        {
          id: 1,
          attributes: {
            name: 'black',
            color: '#000000',
          },
        },
        {
          id: 2,
          attributes: {
            name: 'white',
            color: '#ffffff',
          },
        },
        {
          id: 2,
          attributes: {
            name: 'red',
            color: '#ff0000',
          },
        },
      ],
    },
  },
} as Meta;

export const Default: StoryFn<ColorsProps> = (args) => <Colors {...args} />;
