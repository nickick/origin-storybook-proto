import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AltCard } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Origin/AltCard',
  component: AltCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AltCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AltCard> = (args) => (
  <div className="space-y-4 md:space-y-0 md:grid md:grid-rows-2 grid-flow-col gap-4">
    <AltCard {...args} />
    <AltCard {...args} />
    <AltCard {...args} />
    <AltCard {...args} />
    <AltCard {...args} />
  </div>
)

export const SocialCard = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SocialCard.args = {
  title: 'TWITTER',
  imgSrc: 'https://placekeanu.com/510/340',
  imgAlt: 'keanu banner',
  body: '156.8k followers',
  narrow: false,
  thumbnailSrc: 'https://placekeanu.com/128/128',
  thumbnailAlt: 'keanu thumbnail'
};