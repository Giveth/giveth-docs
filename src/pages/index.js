import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import useThemeContext from '@theme/hooks/useThemeContext'

const features = [
  {
    title: 'What is Giveth?',
    slug: 'whatisgiveth/',
    id: 'whatisgiveth',
    imageUrl: 'img/givethLogoIndigo.svg',
    description: (
      <>
        <p id='introText'>Everything you need to know about how we do things at Giveth. If you're a new contributor, start here!</p>
      </>
    )
  },
  {
    title: 'Giveth.io',
    slug: 'dapps/',
    id: 'givethio',
    imageUrl: 'img/givethIOlight.svg',
    description: (
      <>
        User Guides, Developer Documentation and all things technical for the Giveth.io DApp.
      </>
    )
  },
  {
    title: 'Giveth TRACE',
    slug: 'dapps/introTrace',
    id: 'givethTrace',
    imageUrl: 'img/givethTRACElight.svg',
    description: (
      <>
        A comprehensive tour of the Giveth TRACE DApp including User Guides, Developer Documentation and Smart Contract Wizardry.
      </>
    )
  }
]
function Feature ({ imageUrl, slug, id, title, description }) {
  const {isDarkTheme} = useThemeContext();
  let imgUrl = useBaseUrl(imageUrl);
  if(id === 'whatisgiveth' && isDarkTheme){
    imgUrl = useBaseUrl('img/givethLogoWhite.svg')
   }
   if(id === 'givethio' && isDarkTheme){
     imgUrl = useBaseUrl('img/givethIOdark.svg')
    }
    if(id === 'givethTrace' && isDarkTheme){
      imgUrl = useBaseUrl('img/givethTRACEdark.svg')
     }
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className='text--center'>
            <img className={styles.featureImage} id={styles[id]} src={imgUrl} alt={title} />

        </div>
      )}

      <h3>
        {' '}
        <Link className={styles.formatLink} to={useBaseUrl(slug)}>
          {title}
        </Link>
      </h3>

      <p>{description}</p>
    </div>
  )
}

function Home () {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context;
  function HeaderContent () {
      const {isDarkTheme} = useThemeContext();
      return (
        <header className={clsx('hero hero--primary', styles.heroBanner )} style={{backgroundImage: isDarkTheme && "url('/img/GivethDocsLogo.svg')"   }}>
          <div className='container hero--primary'>
            <div className={styles.formatHero} style={{color: isDarkTheme && "white" }}>
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
          </div>
        </header>
      )
    }

  return (
    <Layout
      title={`${siteConfig.title}`}
      description='Comprehensive Documentation for Contributors and Developers to the Giveth DApps and about Giveth as an organisation'
    >
      <HeaderContent  siteConfig={siteConfig}/>
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
