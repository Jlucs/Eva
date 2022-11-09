import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState, forwardRef } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";


export default function Dropdown() {
  const router = useRouter();
  return (
    <Menu as="div">
      <Menu.Button className="dropdown-btn-2">
        Version
        <div className="dropdown-caret"></div>
    </Menu.Button>
      <Menu.Items className="dropdown-2">
        <div className="dropdown-modal">
         {props.children}
        </div>
      </Menu.Items>
    </Menu>
  )
}