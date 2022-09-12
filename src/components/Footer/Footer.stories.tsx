import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Footer } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Origin/Footer',
  component: Footer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Footer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Footer> = (args) => (
  <Footer />
)

export const OriginProtocolFooter = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OriginProtocolFooter.args = {
  webProperty: 'originprotocol',
  title: 'Lucky Ducky NFTs',
  imgSrc: 'https://placekeanu.com/510/340',
  imgAlt: 'keanu banner',
  body: '7,777 Lucky Duckies have left the pond and are getting into mischief!',
  linkText: 'Visit luckyducky.xyz/market',
  linkHref: 'https://google.com',
  thumbnailSrc: 'https://placekeanu.com/128/128',
  thumbnailAlt: 'Keanu face'
};
