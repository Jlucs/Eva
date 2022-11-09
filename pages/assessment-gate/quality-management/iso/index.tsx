import type { ReactElement } from 'react'
import Layout from '../../../../components/Layouts/Master'
import type { NextPageWithLayout } from '../../../_app'
import Subheader from '../../../../components/Subheader/Subheader'
import ListBox1 from '../../../../components/ListBox/ListBox1'
import Dropdown1 from '../../../../components/Dropdown/Dropdown1'
import Link from 'next/link'

const Page: NextPageWithLayout = () => {
  return (
    <main className="mt-5">
        <Subheader
        className="bg-lightblue">
          <div className="container container-fluid container-1260 d-flex align-items-center justify-content-between">
            <div>
              Create an assessment (Step 3 of 3)
            </div>
          </div>
        </Subheader>
        <div className="container container-fluid container-1260">
            <div className="d-flex flex-auto flex-justify-start">
                <div className="select-container">
                    <Dropdown1/>
                </div>
                <div className="select-version">ISO - 20001-2018</div>
            </div>
            <div className="mt-5 button">
                <div className="button-spacer">
                    <Link href="/assessment-gate/quality-management/iso/20001-2018/maturity-assessment" className="btn btn-blue">
                        General ISO 20001 Maturity		
                    </Link>
                </div>
                <div className="button-spacer">
                    <Link href="/assessment-gate/quality-management/iso/20001-2018/maturity-specific-assessment" className="btn btn-blue">
                        Select functional activities to assess
                    </Link>
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