import React, { useState } from 'react'
import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

type Props = {
           
}

export default function Sidebar({}: Props) {
    const router = useRouter();
  return (
    <div className="sidebar">
        <div className="menu menu-column menu-rounded menu-sub-indention">
            <div className={["menu-item", '', router.pathname == "/assessment-gate" ? "active" : ""].join(" ")}>
                <Link href="/assessment-gate" className="menu-link">
                    <span className="menu-title">General</span>
                </Link>
            </div>
            <div className={["menu-item", '', router.pathname == "/assessment-gate/category" ? "active" : ""].join(" ")}>
                <Link href="/assessment-gate/category" className="menu-link">
                    <span className="menu-title">Assessment category</span>
                </Link>
            </div>
            <div className={["menu-item", '', router.pathname.startsWith("/assessment-gate/type") ? "active" : ""].join(" ")}>
                <Link href="/assessment-gate/type" className="menu-link">
                    <span className="menu-title">Assessment type</span>
                </Link>
            </div>
            <div className={["menu-item", '', router.pathname.startsWith("/assessment-gate/quiz") ? "active" : ""].join(" ")}>
                <Link href="/assessment-gate/quiz/general" className="menu-link">
                    <span className="menu-title">Assessment questionnaire</span>
                </Link>
            </div>
        </div>
    </div>
  )
}