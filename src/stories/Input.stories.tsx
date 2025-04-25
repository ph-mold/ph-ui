import Input from "@/Input";
import type { Meta, StoryObj } from "@storybook/react";
import { Search, Eye } from "lucide-react";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Components/Input",
  args: {
    label: "아이디",
    placeholder: "아이디를 입력하세요",
    size: "medium",
    variant: "filled",
    fullWidth: true,
    helperText: "6자 이상 입력해주세요",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    label: "비밀번호",
    error: true,
    placeholder: "비밀번호를 입력하세요",
    helperText: "비밀번호가 일치하지 않습니다",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    placeholder: "outlined 스타일 입력란",
  },
};

export const WithStartIcon: Story = {
  args: {
    startIcon: <Search size={16} />,
    placeholder: "검색어를 입력하세요",
  },
};

export const WithEndIcon: Story = {
  args: {
    endIcon: <Eye size={16} />,
    placeholder: "비밀번호 보기 아이콘",
  },
};

export const LargeSize: Story = {
  args: {
    size: "large",
    placeholder: "큰 입력란",
  },
};
