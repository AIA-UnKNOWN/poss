import type { Meta, StoryObj } from '@storybook/react';

import Note from './Note';

const meta: Meta<typeof Note> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'components/Note',
  component: Note,
};

export default meta;
type Story = StoryObj<typeof Note>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
 export const Primary: Story = {
  args: {
    text: 'Hello this is a sample message',
  },
};