import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const features = [
  {
    title: 'Giveth DApp User Guides',
    slug: 'guides/',
    imageUrl: 'img/giversanddoers.svg',
    description: (
      <>
        User Guides for getting started on Giveth.io. Whether you're a project owner or donor this is the place for all
        info!
      </>
    )
  },
  {
    title: 'Developer Documentation',
    slug: 'docs/',
    imageUrl: 'img/devs.svg',
    description: (
      <>
        If you want to contribute to the Giveth.io project or fork our code this section has everything you need to know
        to get up and running.
      </>
    )
  },
  {
    title: 'What is Giveth?',
    slug: 'whatisgiveth/',
    imageUrl: 'img/giveth-logo.svg',
    description: (
      <>
        If you're curious to know more about <strong>what giveth is.</strong> have a look over here.
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
      description='Documentation for Giveth.io DApp Contributors and Developers'
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
              to={useBaseUrl('guides/')}
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
