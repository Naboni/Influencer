import '../styles/globals.css'
import 'antd/dist/antd.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config, library } from "@fortawesome/fontawesome-svg-core"; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
config.autoAddCss = false;
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)
import Head from "next/head";
import { Layout } from 'antd';
import AppAd from '@/components/Layout/Ad';
import Navbar from '@/components/Layout/Navbar';
import AppFooter from '@/components/Layout/Footer';
import image1 from '../public/images/BackgroundHeader.webp';
import AppFooter2 from '@/components/Layout/Footer2';
const { Header, Content, Footer } = Layout;

function MyApp({ Component, pageProps }) {
  return (
    <Layout className="mainLayout">
      <Head>
        <link
          rel="preload"
          href="/fonts/Poppins/Poppins-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <title>Betopia Digital Marketplace</title>
      </Head>

      <Content>
        <Navbar />
        <Component {...pageProps} />
      </Content>
      <Footer>
        {/* <AppFooter /> */}
        <AppFooter2 />
      </Footer>
    </Layout>
  )

}

export default MyApp
