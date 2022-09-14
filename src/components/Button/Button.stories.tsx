import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Origin/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const OriginProtocol = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OriginProtocol.args = {
  webProperty: 'originprotocol',
  label: 'Connect Wallet',
};

export const OUSD = Template.bind({});
OUSD.args = {
  webProperty: 'ousd',
  label: 'Connect Wallet',
};
OUSD.parameters = {
  backgrounds: {
    default: 'dark'
  }
}

export const Story = Template.bind({});
Story.args = {
  webProperty: 'story',
  label: 'Connect Wallet',
};
