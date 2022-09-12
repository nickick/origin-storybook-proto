import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Typography } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Origin/Typography',
  component: Typography,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Typography>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Typography> = (args) => (
  <div>
    <Typography.H1 {...args} children='Typography.H1' />
    <br />
    <Typography.H2 {...args} children='Typography.H2' />
    <br />
    <Typography.H3 {...args} children='Typography.H3' />
    <br />
    <Typography.H4 {...args} children='Typography.H4' />
    <br />
    <Typography.H5 {...args} children='Typography.H5' />
    <br />
    <Typography.H6 {...args} children='Typography.H6' />
    <br />
    <Typography.H7 {...args} children='Typography.H7' />
    <br />
    <Typography.Body {...args} children='Typography.Body' />
    <br />
    <Typography.Body2 {...args} children='Typography.Body2' />
    <br />
    <Typography.Title {...args} children='Typography.Title' />
    <br />
    <Typography.Caption {...args} children='Typography.Caption' />
    <br />
    <Typography.Label {...args} children='Typography.Label' />
    <br />
    <Typography.Link {...args} href="https://google.com" children='Typography.Link' />
    <br />
    <Typography {...args} children='Typography base (uses body)' />
  </div>
)
export const TypographyTypes = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TypographyTypes.args = {
  children: 'Heading 1',
};