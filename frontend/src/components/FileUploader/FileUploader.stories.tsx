import type { Meta, StoryObj } from '@storybook/react';

import FileUploader from './FileUploader';

const meta: Meta<typeof FileUploader> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'components/FileUploader',
  component: FileUploader,
};

export default meta;
type Story = StoryObj<typeof FileUploader>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {},
};