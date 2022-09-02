import React from 'react';

import { Button } from './Button';
import { Dropdown } from './Dropdown';
import Logo from './assets/logo.svg'
import Story from './assets/story.svg'
import Dollar from './assets/dollar.svg'
import './header.css';

const LanguageOptions = [
  {
    label: 'Deutsch',
    href: '#'
  },
  {
    label: 'English',
    href: '#'
  },
  {
    label: 'Espańol',
    href: '#'
  },
  {
    label: 'Filipino',
    href: '#'
  },
  {
    label: 'Français',
    href: '#'
  },
  {
    label: 'Hrvatski',
    href: '#'
  },
  {
    label: 'Indonesia',
    href: '#'
  },
  {
    label: 'Indonesia',
    href: '#'
  },
  {
    label: 'Italioano',
    href: '#'
  },
  {
    label: 'Nederlands',
    href: '#'
  },
  {
    label: 'Português',
    href: '#'
  },
  {
    label: 'Tiếng việt',
    href: '#'
  },
  {
    label: 'Türkçe',
    href: '#'
  },
  {
    label: 'Ελληνικά',
    href: '#'
  },
  {
    label: 'Русский',
    href: '#'
  },
  {
    label: 'עברית',
    href: '#'
  },
  {
    label: 'العربية',
    href: '#'
  },
  {
    label: 'ไทย',
    href: '#'
  },
  {
    label: '한국어',
    href: '#'
  },
  {
    label: '日本語',
    href: '#'
  },
  {
    label: '简体中文',
    href: '#'
  },
  {
    label: '繁體中文',
    href: '#'
  },
]

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

interface OriginProtocolNavProps {
  language: string
}

const OriginProtocolNav = ({
  language
}: OriginProtocolNavProps) => (
  <div className='flex'>
    <Dropdown label="Products" options={ProductsOptions} />
    <Dropdown label="Company" options={ProductsOptions} />
    <Button label='Community' type="header" size="small" />
    <Dropdown label={language} options={LanguageOptions}  alignRight bolding='selection' />
  </div>
)

const StoryNav = () => (
  <div className='flex'>
    <Dropdown label="Products" options={ProductsOptions} />
    <Dropdown label="Drops" options={ProductsOptions} />
    <Button label='Docs' type="header" size="small" />
    <Dropdown label="OGN" highlightText="Rewards" options={OgnDropdownOptions} />
    <div className='flex space-x-5 pl-4'>
      <Button size="small" label="Buy Ogn" webProperty="story" />
      <Button size="small" label="Connect Wallet" webProperty="story" />
    </div>
  </div>
)

interface HeaderProps {
  webProperty: 'originprotocol' | 'ousd' | 'story'
  language?: string
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = ({ webProperty, language, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
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
        {webProperty === 'originprotocol' && (
          <OriginProtocolNav language={language || 'English'} />
        )}
        {webProperty === 'story' && (
          <StoryNav />
        )}
      </div>
    </div>
  </header>
);
