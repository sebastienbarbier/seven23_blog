import React, { useState } from 'react';
import Head from 'next/head'
import styles from './layout.module.scss'
import Link from 'next/link'

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';

import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const name = 'Seven23'
export const siteTitle = 'Seven23 - Blog'

export default function Layout({ children, home }) {

  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      <header>
        <Container justifyContent="space-between" alignItems="center">
          <Stack container direction="row" justifyContent="space-between" alignItems="center">
            <Link href="/" className={styles.title}>
              <h1><img src="/images/svg/seven23_logo.svg" alt="Seven23 logo" /> Seven23</h1>
            </Link>
            <Stack direction="row" alignItems="center" spacing={2} display={{ xs: 'none', md: 'flex' }}>
              <Button href="https://seven23.io" component={Link}>Visit Seven23.io</Button>
            </Stack>

            <Box display={{ xs: 'flex', md: 'none' }}>
              <IconButton onClick={() => setDrawerOpen(true) }>
                <MenuIcon color="primary" />
              </IconButton>
            </Box>

            <Drawer
              anchor="right"
              open={isDrawerOpen}
              onClose={() => setDrawerOpen(false)}>
              <Box style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: 20, paddingRight: 26  }}>
                <IconButton onClick={() => setDrawerOpen(false) }>
                  <CloseIcon />
                </IconButton>
              </Box>
              <nav>
                <List style={{ width: 300, maxWidth: '80vw'}}>
                  <ListItem>
                    <ListItemButton component={Link} href="https://seven23.io">
                      <ListItemText primary="Visit Seven23.io"/>
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            </Drawer>

          </Stack>
        </Container>
      </header>

      <main>{children}</main>
    </div>
  )
}
