import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Origin/Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => (
  <div className="space-y-4 md:space-y-0 md:grid md:grid-rows-2 grid-flow-col gap-4">
    <Card {...args} />
    <Card {...args} />
    <Card {...args} />
    <Card {...args} />
    <Card {...args} />
  </div>
)

export const OriginProtocolCard = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OriginProtocolCard.args = {
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

export const OUSDCard = Template.bind({});
OUSDCard.args = {
  webProperty: 'ousd',
  title: 'Lucky Ducky NFTs',
  imgSrc: 'https://placekeanu.com/510/340',
  imgAlt: 'keanu banner',
  body: '7,777 Lucky Duckies have left the pond and are getting into mischief!',
  linkText: 'Visit luckyducky.xyz/market',
  linkHref: 'https://google.com',
  thumbnailSrc: 'https://placekeanu.com/128/128',
  thumbnailAlt: 'Keanu face'
};
OUSDCard.parameters = {
  backgrounds: {
    default: 'dark'
  }
}

export const StoryCard = Template.bind({});
StoryCard.args = {
  webProperty: 'story',
  title: 'Lucky Ducky NFTs',
  imgSrc: 'https://placekeanu.com/510/340',
  imgAlt: 'keanu banner',
  body: '7,777 Lucky Duckies have left the pond and are getting into mischief!',
  linkText: 'Visit luckyducky.xyz/market',
  linkHref: 'https://google.com',
  thumbnailSrc: 'https://placekeanu.com/128/128',
  thumbnailAlt: 'Keanu face'
};
