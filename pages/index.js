import Head from 'next/head'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'
const XkitCatalog = dynamic(
  () => import('@xkit-co/xkit-catalog.js').then(mod => mod.App),
  { ssr: false }
)
import { createXkit } from '@xkit-co/xkit-catalog.js'
const xkit = process.browser ? createXkit(process.env.NEXT_PUBLIC_XKIT_DOMAIN) : undefined

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Integrations</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a
            href="https://xkit.co?utm_source=next.js-sample-app&utm_campaign=nextjs_sample_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/xkit-logo-black.svg" alt="Xkit Logo" className={styles.logo} />
          </a>
          integrations
        </h1>
        {<XkitCatalog xkit={xkit} connectorsPath="/" hideTitle />}
      </main>

      <footer className={styles.footer}>
        Powered by{' '}
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
