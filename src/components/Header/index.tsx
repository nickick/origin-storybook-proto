import { useState } from 'react';
import { Button } from '../Button';
import { Dropdown } from '../Dropdown';
import { LanguageOptions, OgnDropdownOptions, ProductsOptions } from './HeaderOptions';
import { OriginLogo } from '../Icons';

export type MappedLink<Link> = {
  href?: string
  label: string
  isButton: boolean
  highlightText?: string
  order: number
  links?: Link[]
}

export type LinkFormatted<IconFormatted> = {
  label: string
  href: string
  highlight?: boolean
  icon?: IconFormatted
}

export type IconFormatted = {
  alternativeText: string
  caption: string
  url: string
}

const NavLinks = ({
  mappedLinks,
  webProperty
}: {
  mappedLinks: MappedLink<LinkFormatted<IconFormatted>>[],
  webProperty: 'originprotocol' | 'ousd' | 'story'
}) => (
  <div className='flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0'>
    {
      mappedLinks.map((mappedLink) => {
        if (!mappedLink.isButton && mappedLink.links) {
          if (mappedLink.links.length > 0) {
            return (
              <Dropdown label={mappedLink.label} highlightText={mappedLink.highlightText} options={mappedLink.links} key={mappedLink.label} />
            )
          } else {
            return (
              <Button label={mappedLink.label} type="header" size="small" key={mappedLink.label} webProperty={webProperty} />
            )
          }
        }
      })
    }
    {webProperty === 'originprotocol' && (
      <div className='self-center'>
        <Dropdown label='English' options={LanguageOptions}  alignRight bolding='selection' />
      </div>
    )}
    <div className='flex flex-col md:flex-row md:space-x-5 md:pl-4 items-center justify-center space-y-4 md:space-y-0'>
      {
        mappedLinks.map((mappedLink) => {
          if (mappedLink.isButton) {
            return (
              <Button size="small" label={mappedLink.label} webProperty="story" />
            )
          }
        })
      }
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
  mappedLinks: MappedLink<LinkFormatted<IconFormatted>>[]
  language?: string
}

export const Header = ({ webProperty, mappedLinks, language, }: HeaderProps) => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="px-9 py-16 w-full flex justify-between items-center max-w-screen-2xl mx-auto">
        <div className="flex h-6">
          <OriginLogo webProperty={webProperty} />
        </div>
        <div className="hidden md:block">
          <NavLinks mappedLinks={mappedLinks} webProperty={webProperty} />
        </div>
        <div className="block md:hidden">
          <Hamburger open={open} setOpen={setOpen} />
        </div>
        <div className={
          `
            ${open ? 'translate-y-0' : 'translate-y-full'}
            ${webProperty === 'ousd' ? 'bg-black' : 'bg-white'}
            transform md:hidden fixed top-0 bottom-0 right-0 left-0 transition-transform shadow z-10
          `
        }>
          <div className='relative h-full'>
            <div className='flex flex-col justify-center align-middle h-full'>
              <div className="absolute right-8 top-16">
                <Hamburger open={open} setOpen={setOpen} />
              </div>
              <NavLinks mappedLinks={mappedLinks} webProperty={webProperty} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
