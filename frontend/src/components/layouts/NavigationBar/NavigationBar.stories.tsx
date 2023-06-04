import type { Meta, StoryObj } from '@storybook/react';

import NavigationBar from './NavigationBar';

const meta: Meta<typeof NavigationBar> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'components/layouts/NavigationBar',
  component: NavigationBar,
};

export default meta;
type Story = StoryObj<typeof NavigationBar>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    logoUrl: "http://localhost:5173/vite.svg",
    companyName: 'My Company Name',
    upperNav: [
      {
        label: 'Navigation 1',
        onClick: navLabel => console.log('navigate to ', navLabel),
      },
      {
        label: 'Navigation 2',
        onClick: navLabel => console.log('navigate to ', navLabel),
      },
      {
        label: 'Navigation 3',
        onClick: navLabel => console.log('navigate to ', navLabel),
      },
    ],
    lowerNav: [
      {
        label: 'Sign Out',
        onClick: navLabel => console.log('navigate to ', navLabel),
      },
    ]
  },
};