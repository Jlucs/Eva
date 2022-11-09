import type { ReactElement } from 'react'
import Layout from '../../../../../../components/Layouts/Master'
import type { NextPageWithLayout } from '../../../../../_app'
import Subheader from '../../../../../../components/Subheader/Subheader'
import ListBox1 from '../../../../../../components/ListBox/ListBox1'
import Link from 'next/link'
import { useEffect } from 'react'
import Sidebar from '../../../../../../components/Sidebar/Sidebar1'
import DropDown1 from '../../../../../../components/Dropdown/Dropdown1'
import DropDown2 from '../../../../../../components/Dropdown/Dropdown2'
import DropDown3 from '../../../../../../components/Dropdown/Dropdown3'

const Page: NextPageWithLayout = () => {
    useEffect( () => {
        const body = document.querySelector("body");
        document.body.classList.add("asd");
        return () => {
            body?.classList.remove("asd");
        }
    });
  return (
    <main className="">
        <div className="heading">
            <div className="container container-fluid container-1200">
                <h1>New assessment (step 3 of 6)</h1>
            </div>
        </div>
        <div className="content">
            <div className="container container-fluid container-1200">
                <div className="layout-1">
                    <Sidebar/>
                    <section className="primary">
                        
                    </section>
                </div>
            </div>
        </div>
    </main> 
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Page