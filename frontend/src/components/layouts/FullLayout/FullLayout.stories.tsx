import type { Meta, StoryObj } from '@storybook/react';

import FullLayout from './FullLayout';

const meta: Meta<typeof FullLayout> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'components/layouts/FullLayout',
  component: FullLayout,
};

export default meta;
type Story = StoryObj<typeof FullLayout>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    children: (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <h1>Place your content here</h1>
      </div>
    )
  }
};