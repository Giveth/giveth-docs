import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const features = [
  {
    title: 'What is Giveth?',
    slug: 'whatisgiveth/',
    imageUrl: 'img/giveth-logo.svg',
    description: (
      <>
        If you're curious to know more about <strong>what giveth is.</strong> have a look over here.
      </>
    )
  },
  {
    title: 'Giveth IO',
    slug: 'givethio/',
    imageUrl: 'img/givethIOfrontpage.png',
    description: (
      <>
        User Guides, Developer Documentation and much more for the Giveth.io DApp
      </>
    )
  },
  {
    title: 'Giveth TRACE',
    slug: 'trace/',
    imageUrl: 'img/content/trace/tracefrontpage.png',
    description: (
      <>
        A comprehensive Guide to the Giveth TRACE DApp including User Guides, Developer Documentation and <strong>much</strong> much more! An updated Fork of Giveth Wiki (2017)
      </>
    )
  }

]

function Feature ({ imageUrl, slug, title, description }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className='text--center'>
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}

      <h3>
        {' '}
        <Link className='formatLink' to={useBaseUrl(slug)}>
          {title}
        </Link>
      </h3>

      <p>{description}</p>
    </div>
  )
}

function Home () {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      title={`${siteConfig.title}`}
      description='Comprehensive Documentation for Contributors and Developers to the Giveth DApps and about Giveth as an organisation'
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className='container hero--primary'>
          <h1 className='hero__title'>{siteConfig.title}</h1>
          <p className='hero__subtitle'>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('whatisgiveth/')}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className='container'>
              <div className='row'>
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  )
}

export default Home
