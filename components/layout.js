import Head from 'next/head'
import styles from './layout.module.scss'
import Link from 'next/link'

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const name = 'Seven23'
export const siteTitle = 'Seven23 - Blog'

export default function Layout({ children, home }) {
  return (
    <div>
      <header>
        <Container justifyContent="space-between" alignItems="center">
          <Stack container direction="row" justifyContent="space-between" alignItems="center">
            <a href="/" className={styles.title}>
              <h1><img src="/images/svg/seven23_logo.svg" alt="Seven23 logo" /> Seven23</h1>
            </a>
            <Stack direction="row" alignItems="center" spacing={2} display={{ xs: 'none', md: 'flex' }}>
              <Button href="/" component={Link}>Articles</Button>
              <Button href="https://seven23.io">seven23.io</Button>
            </Stack>
          </Stack>
        </Container>

      </header>

      <main>{children}</main>
    </div>
  )
}
