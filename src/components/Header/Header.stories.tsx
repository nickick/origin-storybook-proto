import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from '.';

export default {
  title: 'Origin/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const OriginProtocol = Template.bind({});
OriginProtocol.args = {
  webProperty: 'originprotocol'
};

export const OUSD = Template.bind({});
OUSD.args = {
  webProperty: 'ousd'
};
OUSD.parameters = {
  backgrounds: {
    default: 'dark'
  }
}

export const Story = Template.bind({});
Story.args = {
  webProperty: 'story'
};