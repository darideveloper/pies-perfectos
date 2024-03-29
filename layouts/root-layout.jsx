import { metaData } from '@/lib/meta.js'
import { regularFont } from '@/lib/fonts'
import { useEffect } from 'react'

import Head from 'next/head'
import Header from '@/components/header.jsx'
import Footer from '@/components/footer.jsx'
import WhatsappIcon from '@/components/whastapp-icon'

import AOS from 'aos'
import 'aos/dist/aos.css'

/**
 * Main layout with header and footer
 * @param {node} children
 * @param {string} subPage current subpage
 * @returns {JSX.Element}
 */
export default function RootLayout({ children, subPage = "" }) {

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      once: false,
      duration: 500,
      easing: "ease-in-out",
    })
  }, [])

  return (
    <>
      <Head>
        {/* Meta data */}
        <title>{`${metaData.title} ${subPage && "| " + subPage}`}</title>
        <meta name="description" content={metaData.description} />
        <meta name="author" content={metaData.author} />
        <meta name="keywords" content={metaData.keywords} />
      </Head>
      <div className={`
        content
        ${regularFont.className}
      `}>
        <Header
          currentPage={subPage}
        />
        <main>
          {children}
        </main>
        <Footer />
        <WhatsappIcon />
      </div>
    </>
  )
}