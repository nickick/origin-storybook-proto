import React from 'react';

import { Button } from './Button';
import { Dropdown } from './Dropdown';
import './header.css';
import { LanguageOptions, ProductsOptions, OgnDropdownOptions } from './HeaderOptions';
import OriginLogo from './OriginLogo';

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

const OusdNav = () => (
  <div className='flex'>
    <Button label='Governance' type="header" size="small" webProperty='ousd' />
    <Button label='Docs' type="header" size="small" webProperty='ousd' />
    <Button label='FAQ' type="header" size="small" webProperty='ousd' />
    <Button label='OGV' type="header" size="small" webProperty='ousd' />
    <div className='flex space-x-5 pl-4'>
      <Button size="small" label="Get OUSD" webProperty="ousd" />
    </div>
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
      <div className="flex h-6">
        <OriginLogo webProperty={webProperty} />
      </div>
      <div>
        {webProperty === 'originprotocol' && (
          <OriginProtocolNav language={language || 'English'} />
        )}
        {webProperty === 'ousd' && (
          <OusdNav />
        )}
        {webProperty === 'story' && (
          <StoryNav />
        )}
      </div>
    </div>
  </header>
);
