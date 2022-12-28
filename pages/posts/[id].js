import Layout from '../../components/layout'
import Date from '../../components/date'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'

import Link from 'next/link'

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <meta name="og:title" content={postData.title} />
      </Head>
      <Container>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={10} md={8}  style={{ padding: '60px 0 80px 0'}}>
            <h1>{postData.title}</h1>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={10} md={7}>

            <Date dateString={postData.date} />

            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            
            <footer style={{ textAlign: 'right' }}>Written by {postData.author}</footer>

            <Box style={{ padding: '40px 0 80px 0'}}>
              <Link href="/">
                ← Back to home
              </Link>
            </Box>

          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}
