import Button from "@/Button";
import Modal from "@/Modal";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: "Components/Modal",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Button onClick={() => setOpen(true)}>모달 열기</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="기본 모달">
          <p>이곳에 모달 내용이 들어갑니다.</p>
          <p>스크롤 가능한 영역도 테스트해보세요.</p>
        </Modal>
        {/* 스토리북에서 portal을 지원하기 위해 필요 */}
        <div id="modal-root" />
      </div>
    );
  },
};

export const NoTitle: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Button onClick={() => setOpen(true)}>모달 열기 (타이틀 없음)</Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <p>타이틀 없이 내용만 표시하는 모달입니다.</p>
        </Modal>
        <div id="modal-root" />
      </div>
    );
  },
};

export const LongContent: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Button onClick={() => setOpen(true)}>긴 내용 모달 열기</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="긴 내용 모달">
          <div className="space-y-4">
            {Array.from({ length: 30 }, (_, i) => (
              <p key={i}>내용 {i + 1}</p>
            ))}
          </div>
        </Modal>
        <div id="modal-root" />
      </div>
    );
  },
};
