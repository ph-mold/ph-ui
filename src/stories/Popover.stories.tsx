import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Popover from "@/Popover";
import Button from "@/Button";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center justify-center h-screen">
      <Popover
        trigger={<Button>팝오버 열기</Button>}
        popoverClassName="p-4 min-w-[200px]"
      >
        <div className="space-y-2">
          <h3 className="font-semibold text-sm">팝오버 제목</h3>
          <p className="text-sm text-gray-600">
            이것은 기본 팝오버입니다. 트리거 요소를 클릭하면 나타납니다.
          </p>
        </div>
      </Popover>
    </div>
  ),
};

export const TopLeft: Story = {
  render: () => (
    <div className="flex items-center justify-center h-screen">
      <Popover
        trigger={<Button>위쪽 왼쪽</Button>}
        placement="top-left"
        popoverClassName="p-4 min-w-[200px]"
      >
        <div className="space-y-2">
          <h3 className="font-semibold text-sm">위쪽 왼쪽 배치</h3>
          <p className="text-sm text-gray-600">
            팝오버가 트리거 요소의 위쪽 왼쪽에 나타납니다.
          </p>
        </div>
      </Popover>
    </div>
  ),
};

export const TopRight: Story = {
  render: () => (
    <div className="flex items-center justify-center h-screen">
      <Popover
        trigger={<Button>위쪽 오른쪽</Button>}
        placement="top-right"
        popoverClassName="p-4 min-w-[200px]"
      >
        <div className="space-y-2">
          <h3 className="font-semibold text-sm">위쪽 오른쪽 배치</h3>
          <p className="text-sm text-gray-600">
            팝오버가 트리거 요소의 위쪽 오른쪽에 나타납니다.
          </p>
        </div>
      </Popover>
    </div>
  ),
};

export const BottomLeft: Story = {
  render: () => (
    <div className="flex items-center justify-center h-screen">
      <Popover
        trigger={<Button>아래쪽 왼쪽</Button>}
        placement="bottom-left"
        popoverClassName="p-4 min-w-[200px]"
      >
        <div className="space-y-2">
          <h3 className="font-semibold text-sm">아래쪽 왼쪽 배치</h3>
          <p className="text-sm text-gray-600">
            팝오버가 트리거 요소의 아래쪽 왼쪽에 나타납니다.
          </p>
        </div>
      </Popover>
    </div>
  ),
};

export const BottomRight: Story = {
  render: () => (
    <div className="flex items-center justify-center h-screen">
      <Popover
        trigger={<Button>아래쪽 오른쪽</Button>}
        placement="bottom-right"
        popoverClassName="p-4 min-w-[200px]"
      >
        <div className="space-y-2">
          <h3 className="font-semibold text-sm">아래쪽 오른쪽 배치</h3>
          <p className="text-sm text-gray-600">
            팝오버가 트리거 요소의 아래쪽 오른쪽에 나타납니다.
          </p>
        </div>
      </Popover>
    </div>
  ),
};

export const WithCustomTrigger: Story = {
  render: () => (
    <div className="flex items-center justify-center h-screen">
      <Popover
        trigger={
          <div className="flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition-colors">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>정보</span>
          </div>
        }
        popoverClassName="p-4 min-w-[250px]"
      >
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="font-semibold text-sm">추가 정보</h3>
          </div>
          <p className="text-sm text-gray-600">
            이것은 커스텀 트리거 요소를 사용한 팝오버입니다. 아이콘과 텍스트가
            포함된 버튼을 트리거로 사용합니다.
          </p>
        </div>
      </Popover>
    </div>
  ),
};

export const WithActions: Story = {
  render: () => (
    <div className="flex items-center justify-center h-screen">
      <Popover
        trigger={<Button>액션 포함</Button>}
        popoverClassName="p-4 min-w-[280px]"
      >
        <div className="space-y-3">
          <h3 className="font-semibold text-sm">사용자 메뉴</h3>
          <div className="space-y-1">
            <button className="w-full text-left px-2 py-1 text-sm hover:bg-gray-100 rounded transition-colors">
              프로필 보기
            </button>
            <button className="w-full text-left px-2 py-1 text-sm hover:bg-gray-100 rounded transition-colors">
              설정
            </button>
            <button className="w-full text-left px-2 py-1 text-sm hover:bg-gray-100 rounded transition-colors">
              도움말
            </button>
          </div>
          <div className="border-t pt-2">
            <button className="w-full text-left px-2 py-1 text-sm text-red-600 hover:bg-red-50 rounded transition-colors">
              로그아웃
            </button>
          </div>
        </div>
      </Popover>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center justify-center h-screen">
      <Popover
        trigger={<Button>비활성화됨</Button>}
        disabled={true}
        popoverClassName="p-4 min-w-[200px]"
      >
        <div className="space-y-2">
          <h3 className="font-semibold text-sm">비활성화된 팝오버</h3>
          <p className="text-sm text-gray-600">
            이 팝오버는 비활성화되어 있어서 클릭해도 열리지 않습니다.
          </p>
        </div>
      </Popover>
    </div>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="flex items-center justify-center h-screen gap-4">
        <Popover
          trigger={<Button>제어된 팝오버</Button>}
          onOpenChange={setIsOpen}
          popoverClassName="p-4 min-w-[200px]"
        >
          <div className="space-y-2">
            <h3 className="font-semibold text-sm">제어된 팝오버</h3>
            <p className="text-sm text-gray-600">
              이 팝오버는 외부에서 상태를 제어할 수 있습니다.
            </p>
          </div>
        </Popover>
        <div className="text-sm">
          팝오버 상태:{" "}
          <span className="font-semibold">{isOpen ? "열림" : "닫힘"}</span>
        </div>
      </div>
    );
  },
};

export const MultiplePopovers: Story = {
  render: () => (
    <div className="flex items-center justify-center h-screen gap-4">
      <Popover
        trigger={<Button variant="text">팝오버 1</Button>}
        placement="top-left"
        popoverClassName="p-3 min-w-[150px]"
      >
        <div className="text-sm">첫 번째 팝오버 내용</div>
      </Popover>

      <Popover
        trigger={<Button variant="contained">팝오버 2</Button>}
        placement="top-right"
        popoverClassName="p-3 min-w-[150px]"
      >
        <div className="text-sm">두 번째 팝오버 내용</div>
      </Popover>

      <Popover
        trigger={<Button variant="outlined">팝오버 3</Button>}
        placement="bottom-left"
        popoverClassName="p-3 min-w-[150px]"
      >
        <div className="text-sm">세 번째 팝오버 내용</div>
      </Popover>
    </div>
  ),
};
