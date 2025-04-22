import { WithSkeleton, Skeleton } from "@/skeleton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof WithSkeleton> = {
  component: WithSkeleton,
  title: "Components/Skeleton",
};
export default meta;

export const Default: StoryObj = {
  render: () => (
    <WithSkeleton isLoading={true} skeleton={<Skeleton className="h-6 w-32" />}>
      <div>Loaded content</div>
    </WithSkeleton>
  ),
};
