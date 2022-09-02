import React from 'react';

import { Button } from './Button';
import { Dropdown } from './Dropdown';
import Logo from './assets/logo.svg'
import Story from './assets/story.svg'
import Dollar from './assets/dollar.svg'
import './header.css';

interface HeaderProps {
  webProperty: 'originprotocol' | 'ousd' | 'story'
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

const ProductsOptions = [
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

const OgnDropdownOptions = [
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

const StoryNav = () => (
  <div className='flex'>
    <Dropdown label="Products" options={ProductsOptions} />
    <Dropdown label="Drops" options={ProductsOptions} />
    <Button label='Docs' type="header" size="small" />
    <Dropdown label="OGN" highlightText="Rewards" options={OgnDropdownOptions} />
    <div className='flex space-x-5 pl-4'>
      <Button size="small" label="Connect Wallet" webProperty="story" />
      <Button size="small" label="Buy Ogn" webProperty="story" />
    </div>
  </div>
)

export const Header = ({ webProperty, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <header>
    <div className="px-9 py-16 w-full flex justify-between">
      <div className="flex">
        <img src={Logo} alt='Origin Story' />
        {webProperty === 'story' && (
          <img src={Story} alt='Story' className='pt-2 pl-2' />
        )}
        {webProperty === 'ousd' && (
          <img src={Dollar} alt='Story' className='pt pl-2' />
        )}
      </div>
      <div>
        {webProperty === 'story' && (
          <StoryNav />
        )}
      </div>
    </div>
  </header>
);
