import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const navItems: {
  label: string
  page?: string
  link?: string
  iconClass?: string
}[] = [
  // { label: 'Home', page: '/home' },
  { label: 'Log', page: '/', iconClass: 'typcn typcn-document-text' },
  {
    label: 'playground',
    link: 'https://yaruwayo.herokuapp.com/',
    iconClass: 'typcn typcn-spanner',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/ukaprog',
    iconClass: 'typcn typcn-social-twitter',
  },
]

const ogImageDefaultUrl = 'https://blog.yaruwayo.com/blog_yaruwayo_og-image.png'

export default ({ titlePre = '', ogImageUrl = undefined }) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} 日々のやるわよ</title>
        <meta
          name="description"
          content="プログラミング学習・個人開発の作業記録がメインのブログです"
        />
        <meta name="og:title" content="日々のやるわよ" />
        <meta property="og:image" content={ogImageUrl || ogImageDefaultUrl} />
        <meta name="twitter:site" content="@_ijjk" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl || ogImageDefaultUrl} />
        <link
          href="https://fonts.googleapis.com/css2?family=Monofett&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/typicons/2.0.9/typicons.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      <div>
        <h1 className="siteName">
          <Link href="/">yaruwayo.com</Link>
        </h1>
      </div>
      <ul>
        {navItems.map(({ label, page, link, iconClass }) => (
          <li key={label}>
            {page ? (
              <Link href={page}>
                <a className={pathname === page ? 'active' : undefined}>
                  <span className={iconClass}></span>
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>
                <span className={iconClass}></span>
                {label}
              </ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}
