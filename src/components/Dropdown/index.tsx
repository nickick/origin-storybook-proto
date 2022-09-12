import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { DownCaret } from '../Icons'

type Options = {
  label: string,
  href: string,
  highlight?: boolean,
}

interface DropdownProps {
  /**
   * Dropdown options
   */
  options: Options[]
  /**
   * Label to show for dropdown button
   */
  label: string
  /**
   * Text to highlight above dropdown
   */
  highlightText?: string,
  /**
   * Should the dropdown menu align to the right?
   */
  alignRight?: boolean,
  /**
   * Should bolding match the current selection, should all options be bold, or should none be bold?
   */
  bolding?: 'selection' | 'none' | 'all',
  /**
   * Additional classes passed to Dropdown top level component
   */
  classes?: string
  /**
   * Additional styling passed to Dropdown top level component
   */
  style?: object
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const SINGLE_COLUMN_OPTIONS_MAX = 8

export const Dropdown = ({
  options,
  label,
  highlightText = '',
  alignRight = false,
  bolding = 'all',
  classes,
  style,
}: DropdownProps) => {
  return (
    <Menu 
      as="div" 
      className={`relative inline-block text-left self-center ${classes}`}
      style={style}
    >
      <div>
        <Menu.Button 
          type="button" 
          className={
            `
            ${highlightText?.length > 0 ? 'pr-14 translate-x-6 md:translate-x-0' : ''}
            transform inline-flex w-full justify-center align-middle px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-offset-gray-100 font-sans
            `
          }
            
          id="menu-button" 
          aria-expanded="true" 
          aria-haspopup="true"
        >
          {label}
          <span className="self-center pl-2">
            <DownCaret />
          </span>
        </Menu.Button>
      </div>
      
      {
        highlightText?.length > 0 && (
          <div className='absolute -right-6 md:right-0 bottom-6 bg-gradient-to-r from-story-pink-start to-story-pink-end rounded text-white text-2xs py-0 px-1'>
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
        <Menu.Items className={`
            ${alignRight ? 'right-1/2 translate-x-1/2 md:right-0 md:mr-0' : 'left-1/2 -translate-x-1/2 md:left-0'} 
            ${options.length > SINGLE_COLUMN_OPTIONS_MAX ? 'w-96 md:w-72 overflow-y-scroll md:overflow-auto' : 'w-40 md:w-36'}
            transform md:translate-x-0 max-h-72 md:max-h-screen
            absolute z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`
          } 
          role="menu" 
          aria-orientation="vertical" 
          aria-labelledby="menu-button" 
          tabIndex={-1}
        >
          <div className="py-1 flex flex-wrap" role="none">
            {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
            {
              options.map(({label: optionLabel, href, highlight}) => (
                <DropdownOption 
                  label={optionLabel} 
                  href={href}
                  highlight={highlight}
                  key={label}
                  bold={bolding === 'all' || bolding === 'selection' && optionLabel === label}
                  columns={options.length > SINGLE_COLUMN_OPTIONS_MAX ? 2 : 1}
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
  bold?: boolean
  columns: number
}

const DropdownOption = ({
  label,
  href,
  highlight = false,
  bold = false,
  columns = 1,
}: DropdownOptionProps) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          href={href}
          className={classNames(
            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
            highlight ? 'text-story-pink' : 'text-gray-700',
            bold ? 'font-bold' : 'font-normal',
            columns === 1 ? 'w-full' : 'w-1/2',
            'block px-4 py-2 text-base md:w-36',
            'font-sans'
          )}
        >
          {label}
        </a>
      )}
    </Menu.Item>
  )
}