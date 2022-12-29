import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import theme from '../components/theme';
import createEmotionCache from '../components/createEmotionCache';
import CssBaseline from '@mui/material/CssBaseline'
  
const name = 'Seven23'
export const siteTitle = 'Seven23 - Blog'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <title>Seven23 - Budget app</title>
                    <link rel="shortcut icon" type="image/svg" href="/favicon.svg" />
                    
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
                    {/* PWA primary color */}
                    {/* Inject MUI styles first to match with the prepend: true configuration. */}
                    { this.props.emotionStyleTags }
                    <style jsx global>{``}</style>
                </Head>
                <Main />
                <NextScript />
            </Html>
        );
    }
}
  
// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
    const originalRenderPage = ctx.renderPage;
  
    // You can consider sharing the same emotion cache between 
    // all the SSR requests to speed up performance.
    // However, be aware that it can have global side effects.
     
   const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);
  
    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => props => <App emotionCache={cache} {...props} />
        });
  
    const initialProps = await Document.getInitialProps(ctx);
  
    // This is important. It prevents emotion to render invalid HTML.
    // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
      
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
        <style
            data-emotion={`${style.key} ${style.ids.join(' ')}`}
            key={style.key}
  
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: style.css }}
        />
    ));
  
    return {
        ...initialProps,
        emotionStyleTags
    };
};