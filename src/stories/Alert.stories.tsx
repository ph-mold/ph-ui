import Button from "@/Button";
import Alert, { GlobalAlert } from "@/Alert";
import { useSetRecoilState } from "recoil";
import { alertQueueState } from "@/Alert/alertAtom";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: "Components/Alert",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Button onClick={() => setOpen(true)}>알림 열기</Button>
        <Alert
          open={open}
          onClose={() => setOpen(false)}
          title="알림"
          description="이것은 기본 알림 메시지입니다."
          acceptLabel="확인"
          cancelLabel="취소"
          showCancelButton={true}
        />
        <div id="modal-root" />
      </div>
    );
  },
};

export const WithoutTitle: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Button onClick={() => setOpen(true)}>알림 열기 (제목 없음)</Button>
        <Alert
          open={open}
          onClose={() => setOpen(false)}
          description="제목이 없는 알림 메시지입니다."
          acceptLabel="확인"
          showCancelButton={false}
        />
        <div id="modal-root" />
      </div>
    );
  },
};

export const Loading: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Button onClick={() => setOpen(true)}>로딩 알림 열기</Button>
        <Alert
          open={open}
          onClose={() => setOpen(false)}
          title="처리 중"
          description="데이터를 처리하고 있습니다. 잠시만 기다려주세요."
          acceptLabel="확인"
          showCancelButton={false}
          loading={true}
        />
        <div id="modal-root" />
      </div>
    );
  },
};

export const CustomContent: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Button onClick={() => setOpen(true)}>커스텀 알림 열기</Button>
        <Alert
          open={open}
          onClose={() => setOpen(false)}
          title="커스텀 알림"
          description={
            <div className="flex flex-col gap-2">
              <p>이것은 커스텀 내용이 포함된 알림입니다.</p>
              <ul className="list-disc pl-4">
                <li>첫 번째 항목</li>
                <li>두 번째 항목</li>
                <li>세 번째 항목</li>
              </ul>
            </div>
          }
          acceptLabel="동의"
          cancelLabel="거부"
          showCancelButton={true}
        />
        <div id="modal-root" />
      </div>
    );
  },
};

export const GlobalAlertExample: Story = {
  render: () => {
    const setAlertQueue = useSetRecoilState(alertQueueState);

    const showAlert = () => {
      setAlertQueue((prev) => [
        ...prev,
        {
          title: "글로벌 알림",
          description: "이것은 글로벌 알림 메시지입니다.",
          acceptLabel: "확인",
          cancelLabel: "취소",
          showCancelButton: true,
          onAccept: () => {
            console.log("확인 버튼 클릭");
          },
          onCancel: () => {
            console.log("취소 버튼 클릭");
          },
        },
      ]);
    };

    const showLoadingAlert = () => {
      setAlertQueue((prev) => [
        ...prev,
        {
          title: "처리 중",
          description: "데이터를 처리하고 있습니다. 잠시만 기다려주세요.",
          acceptLabel: "확인",
          showCancelButton: false,
          loading: true,
        },
      ]);
    };

    const showCustomAlert = () => {
      setAlertQueue((prev) => [
        ...prev,
        {
          title: "커스텀 글로벌 알림",
          description: (
            <div className="flex flex-col gap-2">
              <p>이것은 커스텀 내용이 포함된 글로벌 알림입니다.</p>
              <ul className="list-disc pl-4">
                <li>첫 번째 항목</li>
                <li>두 번째 항목</li>
                <li>세 번째 항목</li>
              </ul>
            </div>
          ),
          acceptLabel: "동의",
          cancelLabel: "거부",
          showCancelButton: true,
        },
      ]);
    };

    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <Button onClick={showAlert}>글로벌 알림 열기</Button>
        <Button onClick={showLoadingAlert}>로딩 글로벌 알림 열기</Button>
        <Button onClick={showCustomAlert}>커스텀 글로벌 알림 열기</Button>
        <GlobalAlert />
        <div id="modal-root" />
      </div>
    );
  },
};
