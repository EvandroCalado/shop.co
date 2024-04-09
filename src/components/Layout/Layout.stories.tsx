import { Meta } from '@storybook/react';
import { Layout } from '.';

export default {
  title: 'Components/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
      navigation: {
        query: {
          q: 'test',
        },
      },
    },
  },
} as Meta;

export const Default = () => (
  <Layout>
    <h1 className="my-16 text-center font-bold">Layout</h1>
  </Layout>
);
