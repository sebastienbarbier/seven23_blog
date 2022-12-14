import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';

const name = 'Seven23'
export const siteTitle = 'Seven23 - Blog'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <CssBaseline />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Latest news regarding the seven23.io project."
        />
        <meta
          property="og:image"
          content={`/images/seven23_round.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Avatar
              alt="Sébastien Barbier"
              src="/images/seven23_round.svg"
              sx={{ width: 144, height: 144 }}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Avatar
                alt="Sébastien Barbier"
                src="/images/seven23_round.svg"
                sx={{ width: 108, height: 108 }}
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            ← Back to home
          </Link>
        </div>
      )}
    </div>
  )
}
