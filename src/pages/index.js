import React from 'react'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import Translate from '@docusaurus/Translate'
import styles from './styles.module.css'

/**
 * Homepage, rebuilt to match the Super/Notion design: a full-width cover
 * banner followed by a four-card grid. Card banners and the cover were
 * salvaged from Super's CDN (see super-salvage/DESIGN-TOKENS.md).
 */
const cards = [
  {
    title: <Translate>What Is Giveth?</Translate>,
    image: 'img/home/card-what-is-giveth.png',
    to: '/whatisgiveth',
    description: (
      <Translate>
        Who we are, how the DAO is structured and how we work. Start here if
        you are new to the community.
      </Translate>
    )
  },
  {
    title: <Translate>Donors &amp; Project Guide</Translate>,
    image: 'img/home/card-donors-projects.png',
    to: '/dapps/gettingStarted',
    icon: '🤝🏻',
    description: (
      <Translate>
        Making a donation, creating and verifying a project, and everything
        else you need to get going on Giveth.
      </Translate>
    )
  },
  {
    title: <Translate>The GIVeconomy</Translate>,
    image: 'img/home/card-giveconomy.png',
    to: '/giveconomy',
    icon: '📥',
    description: (
      <Translate>
        GIVbacks, GIVstream, GIVpower and the rest of the token economy —
        contract addresses, mechanics and tutorials.
      </Translate>
    )
  },
  {
    title: <Translate>DeVouch</Translate>,
    image: 'img/home/card-devouch.jpg',
    to: '/devouch',
    description: (
      <Translate>
        Decentralised vouching for projects: what it is, and how to integrate
        it into your own application.
      </Translate>
    )
  }
]

function Card ({ title, image, to, icon, description }) {
  return (
    <Link className={styles.card} to={useBaseUrl(to)}>
      <img
        className={`${styles.cardImage} no-border`}
        src={useBaseUrl(image)}
        alt=''
        loading='lazy'
      />
      <div className={styles.cardBody}>
        <h2 className={styles.cardTitle}>
          {icon && (
            <span className={styles.cardIcon} aria-hidden='true'>
              {icon}
            </span>
          )}
          {title}
        </h2>
        <p className={styles.cardText}>{description}</p>
      </div>
    </Link>
  )
}

export default function Home () {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout
      title={siteConfig.title}
      description='Comprehensive documentation for contributors and developers to the Giveth DApps, and about Giveth as an organisation'
    >
      <header className={styles.cover}>
        <img
          className={`${styles.coverImage} no-border`}
          src={useBaseUrl('img/home/cover-giveth.png')}
          alt=''
        />
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>{siteConfig.title}</h1>
        <p className={styles.tagline}>{siteConfig.tagline}</p>

        <div className={styles.grid}>
          {cards.map((card) => (
            <Card key={card.to} {...card} />
          ))}
        </div>
      </main>
    </Layout>
  )
}
