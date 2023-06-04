import { Fragment } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Transaction from './Transaction';

const meta: Meta<typeof Transaction> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'components/cards/Transaction',
  component: Transaction,
};

export default meta;
type Story = StoryObj<typeof Transaction>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    transaction: {
      id: 1,
      totalAmount: 199,
      createdDate: new Date().toLocaleDateString(),
    },
    onClick: transaction =>console.log(`Clicked transaction #${transaction.id}`),
  },
}
export const WithManyTransactions: Story = {
  decorators: [
    (story, storyObj) => {
      const ITEMS_COUNT = 30;
      const dummyItems = Array(ITEMS_COUNT).fill(null);
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          {dummyItems.map((_, i) => (
            <Fragment key={i}>
              {story({
                ...storyObj,
                args: {
                  transaction: {
                    id: i+1,
                    totalAmount: 10 * i,
                    createdDate: new Date(2023, 6, i).toLocaleDateString(),
                  },
                  onClick: transaction =>console.log(`Clicked transaction #${transaction.id}`),
                },
              })}
            </Fragment>
          ))}
        </div>
      );
    }
  ]
}