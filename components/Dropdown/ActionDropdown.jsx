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
      <Menu.Button className="dropdown-btn-2">
        {props.dropDownState}
        <div className="dropdown-caret"></div>
    </Menu.Button>
      <Menu.Items className="dropdown-2">
        <div className="dropdown-modal">
        <Menu.Item>
          
            <NextLink
              className={["link", router.pathname == "/assessment-gate/type/iso" ? "current" : ""].join(" ")}
              href="/assessment-gate"
            >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z" fill="currentColor"></path><path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor"></path></svg>
            New Assessment
            </NextLink>
         
        </Menu.Item>
        <Menu.Item>
        
            <NextLink className={["link", router.pathname == "/assessment-gate/type/6sigma" ? "current" : ""].join(" ")} 
            href="/">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.3" d="M8.9 21L7.19999 22.6999C6.79999 23.0999 6.2 23.0999 5.8 22.6999L4.1 21H8.9ZM4 16.0999L2.3 17.8C1.9 18.2 1.9 18.7999 2.3 19.1999L4 20.9V16.0999ZM19.3 9.1999L15.8 5.6999C15.4 5.2999 14.8 5.2999 14.4 5.6999L9 11.0999V21L19.3 10.6999C19.7 10.2999 19.7 9.5999 19.3 9.1999Z" fill="currentColor"></path><path d="M21 15V20C21 20.6 20.6 21 20 21H11.8L18.8 14H20C20.6 14 21 14.4 21 15ZM10 21V4C10 3.4 9.6 3 9 3H4C3.4 3 3 3.4 3 4V21C3 21.6 3.4 22 4 22H9C9.6 22 10 21.6 10 21ZM7.5 18.5C7.5 19.1 7.1 19.5 6.5 19.5C5.9 19.5 5.5 19.1 5.5 18.5C5.5 17.9 5.9 17.5 6.5 17.5C7.1 17.5 7.5 17.9 7.5 18.5Z" fill="currentColor"></path></svg>
            New Benchmark
            </NextLink>
          
        </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  )
}