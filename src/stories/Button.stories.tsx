import type { Meta, StoryObj } from "@storybook/react";
import Button from "@/Button";
import {
  Plus,
  Download,
  ArrowRight,
  Settings,
  Trash2,
  Heart,
} from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "text",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "contained",
  },
};

export const WithStartIcon: Story = {
  args: {
    children: "Add Item",
    startIcon: <Plus className="size-4" />,
    variant: "contained",
  },
};

export const WithEndIcon: Story = {
  args: {
    children: "Download",
    endIcon: <Download className="size-4" />,
    variant: "outlined",
  },
};

export const WithBothIcons: Story = {
  args: {
    children: "Continue",
    startIcon: <ArrowRight className="size-4" />,
    endIcon: <ArrowRight className="size-4" />,
    variant: "contained",
  },
};

export const IconOnly: Story = {
  args: {
    children: "",
    startIcon: <Settings className="size-4" />,
    variant: "text",
    size: "small",
  },
};

export const DeleteButton: Story = {
  args: {
    children: "Delete",
    startIcon: <Trash2 className="size-4" />,
    variant: "outlined",
    color: "error",
  },
};

export const LikeButton: Story = {
  args: {
    children: "Like",
    startIcon: <Heart className="size-4" />,
    variant: "text",
    color: "error",
  },
};

export const FullWidth: Story = {
  args: {
    children: "Full Width Button",
    fullWidth: true,
    variant: "contained",
  },
};

export const FullWidthWithIcon: Story = {
  args: {
    children: "Full Width with Icon",
    startIcon: <Plus className="size-4" />,
    fullWidth: true,
    variant: "outlined",
  },
};

export const FullWidthLoading: Story = {
  args: {
    children: "Loading Button",
    fullWidth: true,
    loading: true,
    variant: "contained",
  },
};
