import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "..";

export interface IPaginated<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
}

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  const maxVisiblePages = 5;
  const halfVisiblePages = Math.floor(maxVisiblePages / 2);

  const getPageNumbers = () => {
    let startPage = Math.max(1, currentPage - halfVisiblePages);
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-1">
      <Button
        variant="text"
        size="xs"
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className="!p-1"
      >
        <ChevronsLeft size={20} />
      </Button>
      <Button
        variant="text"
        size="xs"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="!p-1"
      >
        <ChevronLeft size={20} />
      </Button>
      {getPageNumbers().map((pageNumber) => (
        <Button
          key={pageNumber}
          variant={pageNumber === currentPage ? "contained" : "outlined"}
          size="xs"
          onClick={() => onPageChange(pageNumber)}
          className="!p-0 size-7"
        >
          <span className="flex items-center justify-center w-full h-full">
            {pageNumber}
          </span>
        </Button>
      ))}
      <Button
        variant="text"
        size="xs"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="!p-1"
      >
        <ChevronRight size={20} />
      </Button>
      <Button
        variant="text"
        size="xs"
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="!p-1"
      >
        <ChevronsRight size={20} />
      </Button>
    </div>
  );
}
