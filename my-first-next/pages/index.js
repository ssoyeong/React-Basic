import Head from 'next/head';
import HomeContainer from './home';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Form Duo</title>
        <meta name="description" content="Form Duo" />
      </Head>
      <HomeContainer />
      <footer>
      </footer>
    </div>
  )
}
