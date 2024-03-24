'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { FC } from 'react';

interface PaginationProps {
  allProductsRequest?: (page?: number) => Promise<void>;
  setCurrentPage: (page: number) => void;
  page: number;
  pageCount: number;
}

export const Pagination: FC<PaginationProps> = ({
  allProductsRequest,
  setCurrentPage,
  page,
  pageCount,
}) => {
  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    if (allProductsRequest) allProductsRequest(page);
  };

  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  if (pageCount < 2) return null;

  return (
    <div className="mt-8 flex items-center justify-end gap-16">
      <button
        className="flex items-center gap-2 rounded-md border-[1px] border-[#f0f0f0] p-2 text-sm capitalize duration-150 hover:bg-[#f0f0f0]"
        onClick={() => {
          let prevPage = page - 1;

          if (prevPage < 1) prevPage = pageCount;
          handlePageChange(prevPage);
        }}
      >
        <ArrowLeft size={16} /> prev
      </button>

      <div className="flex items-center gap-2">
        {pages.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`${pageNumber === page ? 'bg-[#f0f0f0]' : ''} flex h-6 w-6 items-center justify-center rounded-sm p-2 text-sm`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>

      <button
        className="flex items-center gap-2 rounded-md border-[1px] border-[#f0f0f0] p-2 text-sm capitalize duration-150 hover:bg-[#f0f0f0]"
        onClick={() => {
          let nextPage = page + 1;

          if (nextPage > pageCount) nextPage = 1;
          handlePageChange(nextPage);
        }}
      >
        next <ArrowRight size={16} />
      </button>
    </div>
  );
};
