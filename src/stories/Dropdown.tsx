import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import DownCaret from './assets/down-caret.svg'

type Options = {
  label: string,
  href: string,
  highlight?: boolean,
}

interface DropdownProps {
  /**
   * Dropdown options
   */
  options?: Options[]
  /**
   * Label to show for dropdown button
   */
  label: string
  /**
   * Text to highlight above dropdown
   */
  highlightText?: string,
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const Dropdown = ({
  options,
  label,
  highlightText = '',
}: DropdownProps) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button 
          type="button" 
          className={
            `
            ${highlightText?.length > 0 ? 'pr-12' : ''}
            inline-flex w-full justify-center align-middle px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-offset-gray-100
            `
          }
            
          id="menu-button" 
          aria-expanded="true" 
          aria-haspopup="true"
        >
          {label}
          <img src={DownCaret} className="self-center pl-2" aria-hidden="true"/>
        </Menu.Button>
      </div>
      
      {
        highlightText?.length > 0 && (
          <div className='absolute right-0 bottom-6 bg-gradient-to-r from-story-pink-start to-story-pink-end rounded text-white text-2xs py-1 px-2'>
            {highlightText}
          </div>
        )
      }

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
          <div className="py-1" role="none">
            {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
            {
              options?.map(({label, href, highlight}) => (
                <DropdownOption 
                  label={label} 
                  href={href}
                  highlight={highlight}
                />
              ))
            }
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

interface DropdownOptionProps {
  label: string
  href: string
  highlight?: boolean
}

const DropdownOption = ({
  label,
  href,
  highlight = false
}: DropdownOptionProps) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          href={href}
          className={classNames(
            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
            highlight ? 'text-story-pink' : 'text-gray-700',
            'block px-4 py-2 text-sm',
            'font-bold'
          )}
        >
          {label}
        </a>
      )}
    </Menu.Item>
  )
}