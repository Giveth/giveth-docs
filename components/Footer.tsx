import Image from 'next/image'
import Link from 'next/link'

import { FOOTER_LINKS, FOOTER_NOTE, FOOTER_SOCIALS } from '@/config/navigation'
import { SocialIcon } from './icons'

export function Footer() {
  return (
    <footer className="super-footer floating has-sidebar">
      <div className="super-footer__content">
        <Link className="super-footer__logo" href="/" aria-label="Giveth Docs home">
          <Image
            src="/logo/logo-light.png"
            alt="Giveth"
            width={133}
            height={48}
            className="footer-logo footer-logo--light"
            style={{ objectFit: 'contain', objectPosition: 'left', height: '48px', width: 'auto' }}
          />
          <Image
            src="/logo/logo-dark.png"
            alt="Giveth"
            width={133}
            height={48}
            className="footer-logo footer-logo--dark"
            style={{ objectFit: 'contain', objectPosition: 'left', height: '48px', width: 'auto' }}
          />
        </Link>

        <div className="super-footer__icons">
          {FOOTER_SOCIALS.map((social) => (
            <a
              key={social.type}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.type}
            >
              <SocialIcon type={social.type} />
            </a>
          ))}
        </div>

        <div className="super-footer__links">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.href}
              className="super-footer__link"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="super-footer__divider" />
        <div className="super-footer__footnote">{FOOTER_NOTE}</div>
      </div>
    </footer>
  )
}
