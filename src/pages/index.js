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
    imageUrl: 'img/giversanddoers.svg',
    description: (
      <>
        Giveth is the easiest way to{' '}
        <code>accept funding for your project</code> and <code>donate</code> to
        projects that benefit us all.
      </>
    )
  },
  {
    title: 'Developer Documentation',
    imageUrl: 'img/devs.svg',
    description: (
      <>
        Wether you are a <code>contributor</code> or want to fork our project -
        this section is for you.
      </>
    )
  },
  {
    title: 'API',
    imageUrl: 'img/api.svg',
    description: (
      <>
        Details about all commands of the <code>backend API</code>.
      </>
    )
  }
]

function Feature ({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className='text--center'>
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
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
