import type { Meta, StoryObj } from '@storybook/react';

import Dropdown from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'components/Dropdown',
  component: Dropdown,
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
const options = ['Item 1', 'Item 2', 'Item 3'];
export const Primary: Story = {
  args: {
    options,
    value: options[1],
  },
};

const groupedOptions = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two', className: 'myOptionClassName' },
  {
   type: 'group', name: 'group1', items: [
      { value: 'three', label: 'Three', className: 'myOptionClassName' },
      { value: 'four', label: 'Four' }
    ]
  },
  {
   type: 'group', name: 'group2', items: [
      { value: 'five', label: 'Five' },
      { value: 'six', label: 'Six' }
    ]
  }
];
export const WithComplexOptions: Story = {
  args: {
    options: groupedOptions,
    value: groupedOptions[1],
  },
} 