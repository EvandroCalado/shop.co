import { Heading, Sizes } from '..';

const tempSizes = {
  data: [
    {
      id: 2,
      attributes: {
        name: 'x-small',
        slug: 'x-small',
        createdAt: '2024-03-10T21:44:41.310Z',
        updatedAt: '2024-03-10T21:44:42.093Z',
        publishedAt: '2024-03-10T21:44:42.089Z',
      },
    },
    {
      id: 1,
      attributes: {
        name: 'xx-small',
        slug: 'xx-small',
        createdAt: '2024-03-10T21:44:30.751Z',
        updatedAt: '2024-03-10T21:45:09.738Z',
        publishedAt: '2024-03-10T21:44:31.689Z',
      },
    },
    {
      id: 3,
      attributes: {
        name: 'small',
        slug: 'small',
        createdAt: '2024-03-10T21:44:56.693Z',
        updatedAt: '2024-03-10T21:45:18.998Z',
        publishedAt: '2024-03-10T21:44:57.671Z',
      },
    },
    {
      id: 4,
      attributes: {
        name: 'medium',
        slug: 'medium',
        createdAt: '2024-03-10T21:45:34.400Z',
        updatedAt: '2024-03-10T21:45:35.181Z',
        publishedAt: '2024-03-10T21:45:35.179Z',
      },
    },
    {
      id: 5,
      attributes: {
        name: 'large',
        slug: 'large',
        createdAt: '2024-03-10T21:45:46.922Z',
        updatedAt: '2024-03-10T21:45:47.654Z',
        publishedAt: '2024-03-10T21:45:47.652Z',
      },
    },
    {
      id: 6,
      attributes: {
        name: 'x-large',
        slug: 'x-large',
        createdAt: '2024-03-10T21:46:03.637Z',
        updatedAt: '2024-03-10T21:46:04.381Z',
        publishedAt: '2024-03-10T21:46:04.379Z',
      },
    },
    {
      id: 7,
      attributes: {
        name: 'xx-large',
        slug: 'xx-large',
        createdAt: '2024-03-10T21:46:14.263Z',
        updatedAt: '2024-03-10T21:46:15.037Z',
        publishedAt: '2024-03-10T21:46:15.034Z',
      },
    },
  ],
  meta: {
    pagination: {
      page: 1,
      pageSize: 25,
      pageCount: 1,
      total: 7,
    },
  },
};

export const FilterSizes = () => {
  return (
    <div>
      <Heading title="Sizes" as="h6" className="my-4 font-semibold" />
      <Sizes sizes={tempSizes} />
    </div>
  );
};
