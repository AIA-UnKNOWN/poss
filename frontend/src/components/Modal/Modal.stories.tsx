import type { Meta, StoryObj } from '@storybook/react';

import Modal from './Modal';
import Button from '../Button/Button';


const meta: Meta<typeof Modal> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'components/Modal',
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    children: (
      <div>
        <span>This is a sample modal</span>
        <div>
          <Button
            text='Okay'
          />
        </div>
      </div>
    )
  },
};