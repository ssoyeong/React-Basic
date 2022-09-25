import Head from 'next/head';
import Link from 'next/link';
import SupportMenu from '../components/supportMenu';
import Header from '../components/header';
import { Stack} from '@mui/material';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Form Duo</title>
        <meta name="description" content="Form Duo" />
      </Head>

      <main>
        <h1>Form Duo 홈 화면입니다.</h1>
        <h4>Form Duo 홈 화면 내용입니다.</h4>
      </main>

      <footer>

      </footer>

    </div>
  )
}
