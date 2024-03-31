'use client';

import { getAllOrdersByUser } from '@/actions/orders/getAllOrdersByUser';
import { Heading, Layout, Pagination } from '@/components';
import { OrdersType } from '@/types/ordersType';
import { formatDate } from '@/utils/formatDate';
import { useSession } from 'next-auth/react';
import { Fragment, useCallback, useEffect, useState } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState<OrdersType>();
  const [currentPage, setCurrentPage] = useState(1);
  const { data: session } = useSession();

  const { page, pageCount } = orders?.meta?.pagination || {
    page: 0,
    pageCount: 0,
  };

  const getOrdersByUser = useCallback(
    async (page = currentPage) => {
      const orders = await getAllOrdersByUser(
        session?.user?.id as string,
        page,
      );
      setOrders(orders);
    },
    [currentPage, session?.user?.id],
  );

  useEffect(() => {
    getOrdersByUser();
  }, [getOrdersByUser]);

  return (
    <Layout>
      <section className="my-16 px-6 py-6 md:px-16 lg:px-24">
        <Heading title="orders" className="text-center capitalize" as="h2" />

        <table className="mt-16 w-full text-left text-sm">
          <thead className="uppercase">
            <tr className="[&>th]:p-2">
              <th className="w-1/4">order</th>
              <th className="w-1/4">date</th>
              <th className="hidden w-1/4 md:table-cell">items</th>
              <th className="w-1/4">total</th>
            </tr>
          </thead>
          <tbody>
            {orders?.data?.map((order) => (
              <tr key={order.id} className="odd:bg-[#f0f0f0] [&>td]:p-2">
                <td className="w-1/4">{order.attributes.orderId}</td>
                <td className="w-1/4">
                  {formatDate(order.attributes.createdAt)}
                </td>
                <td className="hidden w-1/4 md:table-cell">
                  {order.attributes.cartItems.map((cartItem) => (
                    <Fragment key={cartItem.id}>
                      {cartItem.product.attributes.name}({cartItem.quantity})
                    </Fragment>
                  ))}
                </td>
                <td className="w-1/4">
                  $
                  {order.attributes.cartItems
                    .reduce((acc, item) => {
                      return acc + item.quantity * item.amount;
                    }, 0)
                    .toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination
          allProductsRequest={() => getOrdersByUser(page)}
          page={page}
          pageCount={pageCount}
          setCurrentPage={setCurrentPage}
        />
      </section>
    </Layout>
  );
};

export default Orders;
