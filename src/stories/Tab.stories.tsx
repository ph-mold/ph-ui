import Tab from "@/Tab";
import { TabItem } from "@/types";
import type { Meta, StoryObj } from "@storybook/react";
import { MessageCircle } from "lucide-react";

const meta: Meta<typeof Tab> = {
  title: "Components/Tab",
  component: Tab,
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "onChange" },
  },
};

export default meta;

type Story = StoryObj<typeof Tab>;

const sampleTabs: TabItem[] = [
  { label: "상세 정보", value: "detail" },
  { label: "문의하기", value: "contact", icon: <MessageCircle size={16} /> },
];

export const Default: Story = {
  args: {
    tabs: sampleTabs,
  },
};

export const NoIndicator: Story = {
  args: {
    tabs: sampleTabs,
    showIndicator: false,
  },
};
