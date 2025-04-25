import TextArea from "@/TextArea";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  title: "Components/TextArea",
  args: {
    label: "설명",
    placeholder: "내용을 입력하세요",
    size: "medium",
    variant: "filled",
    helperText: "최대 200자까지 입력할 수 있습니다",
    maxLength: 200,
    fullWidth: true,
    showCount: true,
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    label: "오류 발생",
    error: true,
    helperText: "에러가 발생했습니다.",
    placeholder: "잘못된 값을 입력했어요.",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    placeholder: "아웃라인 스타일 입력란",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    placeholder: "큰 입력창",
  },
};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: "기본값이 있는 TextArea",
    showCount: true,
    maxLength: 100,
  },
};
