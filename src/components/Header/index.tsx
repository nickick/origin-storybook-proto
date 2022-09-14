import { useState } from 'react';
import { Button } from '../Button';
import { Dropdown } from '../Dropdown';
import { LanguageOptions, OgnDropdownOptions, ProductsOptions } from './HeaderOptions';
import { OriginLogo } from '../Icons';

const OriginProtocolNav = ({
  language
}: {
  language: string
}) => (
  <div className='flex flex-col md:flex-row space-y-4 md:space-y-0'>
    <div className='block md:hidden self-center'>
      <Dropdown label={language} options={LanguageOptions}  alignRight bolding='selection' />
    </div>
    <Dropdown label="Products" options={ProductsOptions} />
    <Dropdown label="Company" options={ProductsOptions} />
    <Button label='Community' type="header" size="small" />
    <div className='hidden md:block self-center'>
      <Dropdown label={language} options={LanguageOptions}  alignRight bolding='selection' />
    </div>
  </div>
)

const OusdNav = () => (
  <div className='flex flex-col md:flex-row space-y-4 md:space-y-0'>
    <Button label='Governance' type="header" size="small" webProperty='ousd' />
    <Button label='Docs' type="header" size="small" webProperty='ousd' />
    <Button label='FAQ' type="header" size="small" webProperty='ousd' />
    <Button label='OGV' type="header" size="small" webProperty='ousd' />
    <div className='flex flex-col md:flex-row md:space-x-5 md:pl-4 items-center justify-center space-y-4 md:space-y-0'>
      <Button size="small" label="Get OUSD" webProperty="ousd" />
    </div>
  </div>
)

const StoryNav = () => (
  <div className='flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0'>
    <Dropdown label="Products" options={ProductsOptions} />
    <Dropdown label="Drops" options={ProductsOptions} />
    <Button label='Docs' type="header" size="small" />
    <Dropdown label="OGN" highlightText="Rewards" options={OgnDropdownOptions} />
    <div className='flex flex-col md:flex-row md:space-x-5 md:pl-4 items-center justify-center space-y-4 md:space-y-0'>
      <Button size="small" label="Buy Ogn" webProperty="story" />
      <Button size="small" label="Connect Wallet" webProperty="story" />
    </div>
  </div>
)

const Hamburger = ({
  setOpen,
  open,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  open: boolean
} ) => (
  <div className="space-y-2 cursor-pointer" onClick={() => setOpen(!open)}>
    <span className={`block w-8 h-0.5 bg-gray-600 transform transition-transform ${open ? 'rotate-45 translate-y-1.5' : ''}`}></span>
    <span className={`block w-8 h-0.5 bg-gray-600 transform transition-transform ${open ? '-rotate-45 -translate-y-1' : ''}`}></span>
  </div>
)

export interface HeaderProps {
  webProperty: 'originprotocol' | 'ousd' | 'story'
  language?: string
}

export const Header = ({ webProperty, language, }: HeaderProps) => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="px-9 py-16 w-full flex justify-between items-center">
        <div className="flex h-6">
          <OriginLogo webProperty={webProperty} />
        </div>
        <div className="hidden md:block">
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
        <div className="block md:hidden">
          <Hamburger open={open} setOpen={setOpen} />
        </div>
        <div className={
          `
            ${open ? 'translate-y-0' : 'translate-y-full'} 
            ${webProperty === 'ousd' ? 'bg-black' : 'bg-white'} 
            transform md:hidden fixed top-0 bottom-0 right-0 left-0 transition-transform shadow
          `
        }>
          <div className='relative h-full'>
            <div className='flex flex-col justify-center align-middle h-full'>
              <div className="absolute right-8 top-16">
                <Hamburger open={open} setOpen={setOpen} />
              </div>
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
        </div>
      </div>
    </header>
  )
}
