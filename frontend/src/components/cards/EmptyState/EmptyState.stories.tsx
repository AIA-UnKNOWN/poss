import type { Meta, StoryObj } from '@storybook/react';

import EmptyState from './EmptyState';

const meta: Meta<typeof EmptyState> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'components/cards/EmptyState',
  component: EmptyState,
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    text: "No items available.",
    className: 'my-sample-empty-state'
  },
};
export const CustomRender: Story = {
  args: {
    customContentRender: (
      <div>
        <h1>This is the message title</h1>
        <p>No items available</p>
      </div>
    )
  },
};