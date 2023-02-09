import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import Layout from '@theme/Layout'
import styles from './index.module.css'

function HomepageHeader() {
  return (
    <header
      className={clsx('hero hero--primary', styles.heroBanner)}
      style={{ backgroundColor: '#282C34' }}
    >
      <div className="container">
        <h1 className="hero__title" style={{ color: '#61DAFB' }}>
          欢迎
        </h1>
        <p className="hero__subtitle">随便看看</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            style={{
              backgroundColor: '#61DAFB',
              border: 'none',
              borderRadius: '0',
            }}
            to="/docs/intro"
          >
            每天进步一点点
          </Link>
        </div>
      </div>
    </header>
  )
}

export default function Home(): JSX.Element {
  return (
    <Layout title="HHX" description="HHX的博客">
      <HomepageHeader />
    </Layout>
  )
}
