import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "@/Pagination";

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  title: "Components/Pagination",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="text-sm text-gray-500">현재 페이지: {currentPage}</div>
        <Pagination
          currentPage={currentPage}
          totalPages={10}
          onPageChange={setCurrentPage}
        />
      </div>
    );
  },
};

export const FewPages: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="text-sm text-gray-500">현재 페이지: {currentPage}</div>
        <Pagination
          currentPage={currentPage}
          totalPages={3}
          onPageChange={setCurrentPage}
        />
      </div>
    );
  },
};

export const ManyPages: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="text-sm text-gray-500">현재 페이지: {currentPage}</div>
        <Pagination
          currentPage={currentPage}
          totalPages={20}
          onPageChange={setCurrentPage}
        />
      </div>
    );
  },
};

export const CurrentPageInMiddle: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(5);
    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="text-sm text-gray-500">현재 페이지: {currentPage}</div>
        <Pagination
          currentPage={currentPage}
          totalPages={10}
          onPageChange={setCurrentPage}
        />
      </div>
    );
  },
};

export const CurrentPageAtEnd: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(10);
    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="text-sm text-gray-500">현재 페이지: {currentPage}</div>
        <Pagination
          currentPage={currentPage}
          totalPages={10}
          onPageChange={setCurrentPage}
        />
      </div>
    );
  },
};
