import { Colors, Heading } from '..';

const tempColors = {
  data: [
    {
      id: 1,
      attributes: {
        name: 'red',
        slug: 'red',
        createdAt: '2024-03-10T21:38:23.639Z',
        updatedAt: '2024-03-10T21:38:24.685Z',
        publishedAt: '2024-03-10T21:38:24.683Z',
        color: '#F50606',
      },
    },
    {
      id: 2,
      attributes: {
        name: 'green',
        slug: 'green',
        createdAt: '2024-03-10T21:38:47.316Z',
        updatedAt: '2024-03-10T21:38:48.337Z',
        publishedAt: '2024-03-10T21:38:48.334Z',
        color: '#00C12B',
      },
    },
    {
      id: 3,
      attributes: {
        name: 'yellow',
        slug: 'yellow',
        createdAt: '2024-03-10T21:39:09.153Z',
        updatedAt: '2024-03-10T21:39:10.064Z',
        publishedAt: '2024-03-10T21:39:10.061Z',
        color: '#F5DD06',
      },
    },
    {
      id: 4,
      attributes: {
        name: 'orange',
        slug: 'orange',
        createdAt: '2024-03-10T21:39:30.832Z',
        updatedAt: '2024-03-10T21:39:31.634Z',
        publishedAt: '2024-03-10T21:39:31.631Z',
        color: '#F57906',
      },
    },
    {
      id: 5,
      attributes: {
        name: 'light blue',
        slug: 'light-blue',
        createdAt: '2024-03-10T21:39:54.961Z',
        updatedAt: '2024-03-10T21:39:55.927Z',
        publishedAt: '2024-03-10T21:39:55.925Z',
        color: '#06C9F4',
      },
    },
    {
      id: 6,
      attributes: {
        name: 'blue',
        slug: 'blue-1',
        createdAt: '2024-03-10T21:40:15.705Z',
        updatedAt: '2024-03-10T21:40:16.481Z',
        publishedAt: '2024-03-10T21:40:16.478Z',
        color: '#063AF5',
      },
    },
    {
      id: 7,
      attributes: {
        name: 'purple',
        slug: 'purple',
        createdAt: '2024-03-10T21:40:59.111Z',
        updatedAt: '2024-03-10T21:40:59.948Z',
        publishedAt: '2024-03-10T21:40:59.945Z',
        color: '#7D06F5',
      },
    },
    {
      id: 8,
      attributes: {
        name: 'pink',
        slug: 'pink',
        createdAt: '2024-03-10T21:41:14.851Z',
        updatedAt: '2024-03-10T21:41:15.711Z',
        publishedAt: '2024-03-10T21:41:15.707Z',
        color: '#F506A4',
      },
    },
    {
      id: 9,
      attributes: {
        name: 'white',
        slug: 'white',
        createdAt: '2024-03-10T21:41:32.890Z',
        updatedAt: '2024-03-10T21:41:33.712Z',
        publishedAt: '2024-03-10T21:41:33.709Z',
        color: '#FFFFFF',
      },
    },
    {
      id: 10,
      attributes: {
        name: 'black',
        slug: 'black',
        createdAt: '2024-03-10T21:41:52.063Z',
        updatedAt: '2024-03-10T21:41:53.351Z',
        publishedAt: '2024-03-10T21:41:53.348Z',
        color: '#000000',
      },
    },
  ],
  meta: {
    pagination: {
      page: 1,
      pageSize: 25,
      pageCount: 1,
      total: 10,
    },
  },
};

export const FilterColors = () => {
  return (
    <div>
      <Heading title="Colors" as="h6" className="my-4 font-semibold" />
      <Colors colors={tempColors} hasTitle={false} />
    </div>
  );
};
