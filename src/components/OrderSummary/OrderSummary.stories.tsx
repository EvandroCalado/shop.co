import { OrderSummary } from '.';

export default {
  title: 'Components/OrderSummary',
  component: OrderSummary,
};

export const Default = () => <OrderSummary />;

Default.parameters = {
  nextjs: {
    appDirectory: true,
    navigation: {
      pathname: '/login',
    },
  },
};
