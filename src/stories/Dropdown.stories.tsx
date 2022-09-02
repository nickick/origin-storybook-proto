import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Dropdown } from './Dropdown';
import { LanguageOptions, OgnDropdownOptions } from './HeaderOptions';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Origin/Dropdown',
  component: Dropdown,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    
  },
} as ComponentMeta<typeof Dropdown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const SimpleDropdown = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SimpleDropdown.args = {
  label: 'Simple Dropdown',
  options: [
    {
      label: 'Collections',
      href: '#'
    },
    {
      label: 'Drops',
      href: '#'
    },
    {
      label: 'Storefront',
      href: '#'
    }
  ]
};

export const HighlightDropdown = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HighlightDropdown.args = {
  label: 'Highlight Dropdown',
  highlightText: 'Rewards',
  options: [
    {
      label: 'Dashboard',
      href: '#'
    },
    {
      label: 'Rewards',
      href: '#',
      highlight: true,
    }
  ]
};

export const SelectionBoldingDropdown = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SelectionBoldingDropdown.args = {
  label: 'English',
  bolding: 'selection',
  options: LanguageOptions
};

export const UnboldedDropdown = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UnboldedDropdown.args = {
  label: 'Unbolded Dropdown',
  bolding: 'none',
  options: OgnDropdownOptions
};
