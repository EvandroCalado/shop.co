import { getOrderById } from '@/actions';
import { Button, Heading, Layout } from '@/components';
import { CartItemProps } from '@/stores/cartStore';
import { formatDate } from '@/utils/formatDate';
import Image from 'next/image';

const Success = async (ctx: { searchParams: { orderId: string } }) => {
  const order = await getOrderById(ctx.searchParams.orderId);

  const { cartItems } = order.data[0].attributes;

  return (
    <Layout>
      <section className="my-16 flex flex-col items-center justify-center">
        <Heading
          title="complete!"
          as="h3"
          className="mb-16 text-center capitalize"
        />

        <Heading
          title="thank you! 🎉"
          as="h6"
          className="mb-4 text-center capitalize text-zinc-400"
        />

        <Heading
          title="order placed successfully"
          as="h4"
          className="text-center capitalize"
        />

        <div className="my-16 flex flex-wrap items-center justify-between gap-4">
          {cartItems.map((cartItem: CartItemProps) => {
            return (
              <div key={cartItem.id} className="relative h-32 w-32">
                <Image
                  src={
                    cartItem.product.attributes.cover.data.attributes.formats
                      .small.url
                  }
                  alt={cartItem.product.attributes.name}
                  priority
                  fill
                  className="object-contain"
                />
                <span className="absolute -right-2 -top-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/95 font-bold text-white">
                  {cartItem.quantity}
                </span>
              </div>
            );
          })}
        </div>

        <div>
          <div className="flex items-center gap-2 text-sm font-bold">
            <span className="w-16 capitalize text-zinc-400">oder id:</span>
            <span>{order.data[0].attributes.orderId}</span>
          </div>
          <div className="flex items-center gap-2 text-sm font-bold">
            <span className="w-16 capitalize text-zinc-400">date:</span>
            <span>{formatDate(order.data[0].attributes.createdAt)}</span>
          </div>
        </div>

        <Button className="mt-8 text-center">purchase history</Button>
      </section>
    </Layout>
  );
};

export default Success;
