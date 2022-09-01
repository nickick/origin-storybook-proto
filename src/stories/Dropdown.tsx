import React from 'react';
import DownCaret from './assets/down-caret.svg'

interface DropdownProps {
  /**
   * Dropdown options
   */
  options?: React.ReactNode
  /**
   * Label to show for dropdown button
   */
  label: string
}

export const Dropdown = ({
  options,
  label,
}: DropdownProps) => {
  return (
    <div className="relative inline-block text-left">
      <div>
        <button type="button" className="inline-flex w-full justify-center align-middle px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-offset-gray-100" id="menu-button" aria-expanded="true" aria-haspopup="true">
          {label}
          <img src={DownCaret} className="self-center pl-2" />
        </button>
      </div>
      <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
        <div className="py-1" role="none">
          {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
          <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0">Account settings</a>
          <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1">Support</a>
          <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-2">License</a>
          <form method="POST" action="#" role="none">
            <button type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabIndex={-1} id="menu-item-3">Sign out</button>
          </form>
        </div>
      </div>
    </div>
  )
}

const DropdownOption = ({}) => {
  return (
    <div />
  )
}