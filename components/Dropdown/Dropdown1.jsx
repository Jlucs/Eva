import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState, forwardRef } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";


const NextLink = forwardRef((props, ref) => {
  let { href, children, ...rest } = props
    return (
        <Link legacyBehavior ref={ref}  href={href}>
          <a ref={ref} {...rest}>
            {children}
          </a>
        </Link>
    )
  })

export default function Dropdown(props) {
  const router = useRouter();
  return (
    <Menu as="div">
      <Menu.Button className="dropdown-btn-1">
        {props.dropDownState}
        <div className="dropdown-caret"></div>
    </Menu.Button>
      <Menu.Items className="dropdown-1">
        <div className="dropdown-modal">
        <Menu.Item>
          
            <NextLink
              className={["link", router.pathname == "/assessment-gate/type/iso" ? "current" : ""].join(" ")}
              href="/assessment-gate/type/iso"
            >
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
                <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
            </svg>
            ISO
            </NextLink>
         
        </Menu.Item>
        <Menu.Item>
        
            <NextLink className={["link", router.pathname == "/assessment-gate/type/6sigma" ? "current" : ""].join(" ")} 
            href="/assessment-gate/quality-management/type/6sigma">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
                <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
            </svg>
            6SIGMA	
            </NextLink>
          
        </Menu.Item>
        <Menu.Item>
        
            <NextLink
              className={["link", router.pathname == "/assessment-gate/type/pdca" ? "current" : ""].join(" ")} 
              href="/assessment-gate/quality-management/type/pdca"
            >
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
                <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
            </svg>
            PDCA		
            </NextLink>
          
        </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  )
}