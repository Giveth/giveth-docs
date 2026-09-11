import React from 'react'
import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './HomeCards.module.css'

/**
 * The homepage body: cover banner, title block and the four-card grid, matching
 * the Super/Notion site. Rendered from docs/index.mdx rather than src/pages so
 * the page sits inside the docs layout and keeps the sidebar, which is how the
 * Super site behaved — its sidebar was present on every page including home.
 *
 * Card banners and the cover were salvaged from Super's CDN; see
 * super-salvage/DESIGN-TOKENS.md.
 */
const cards = [
  {
    title: 'What Is Giveth?',
    image: 'img/home/card-what-is-giveth.png',
    to: '/what-is-giveth/about-giveth',
    description:
      'Who we are, how the DAO is structured and how we work. Start here if you are new to the community.'
  },
  {
    title: 'Donors & Project Guide',
    image: 'img/home/card-donors-projects.png',
    to: '/what-is-giveth/donors-project-guides',
    icon: '🤝🏻',
    description:
      'Making a donation, creating and verifying a project, and everything else you need to get going on Giveth.'
  },
  {
    title: 'The GIVeconomy',
    image: 'img/home/card-giveconomy.png',
    to: '/what-is-giveth/the-giveconomy',
    icon: '📥',
    description:
      'GIVbacks, GIVstream, GIVpower and the rest of the token economy — contract addresses, mechanics and tutorials.'
  },
  {
    title: 'DeVouch',
    image: 'img/home/card-devouch.jpg',
    to: '/devouch',
    description:
      'Decentralised vouching for projects: what it is, and how to integrate it into your own application.'
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

export default function HomeCards () {
  const { siteConfig } = useDocusaurusContext()
  return (
    <div className={styles.home}>
      <img
        className={`${styles.cover} no-border`}
        src={useBaseUrl('img/home/cover-giveth.png')}
        alt=''
      />
      <h1 className={styles.title}>{siteConfig.title}</h1>
      <p className={styles.tagline}>{siteConfig.tagline}</p>
      <div className={styles.grid}>
        {cards.map((c) => (
          <Card key={c.to} {...c} />
        ))}
      </div>
    </div>
  )
}
