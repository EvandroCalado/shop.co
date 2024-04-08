import { OrderSummary } from '.';

export default {
  title: 'Components/OrderSummary',
  component: OrderSummary,
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/login',
      },
    },
  },
};

export const Default = () => <OrderSummary />;
