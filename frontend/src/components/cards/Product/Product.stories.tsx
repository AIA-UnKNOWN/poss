import { Fragment } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Product from './Product';

const meta: Meta<typeof Product> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'components/cards/Product',
  component: Product,
};

export default meta;
type Story = StoryObj<typeof Product>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    product: {
      name: 'Vitamilk',
      price: 1.99,
      photoUrl: 'data:image/jpeg;base64,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'
    },
  },
};
export const WithManyProducts: Story = {
  args: Primary.args,
  decorators: [
    (story, storyObj) => {
      const ITEMS_COUNT = 30;
      const dummyItems = Array(ITEMS_COUNT).fill(null);
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            flexWrap: 'wrap',
          }}
        >
          {dummyItems.map((_, i) => (
            <Fragment key={i}>
              {story({
                ...storyObj,
                args: {
                  ...storyObj.args,
                  product: {
                    ...storyObj.args.product,
                    name: `Vitamilk ${i+1}`,
                    price: i * 10,
                  }
                }
              })}
            </Fragment>
          ))}
        </div>
      );
    }
  ],
};