import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import SupportMenu from '../components/supportMenu';

export default function Home() {
  return (
    <div> 
      <Head>
        <Image
          priority
          src="/../public/images/header.jpg"
          height={261}
          width={1680}
          alt=""
        />
      </Head>

      <main>
        <h1>Form Duo 홈 화면입니다.</h1>
        <h4 className='title'>
          <Link href="/posts/mypage">마이페이지로 가기</Link>
        </h4>
        <h4 className='title'>
          <Link href="/posts/support/notice">공지사항으로 가기</Link>
          <SupportMenu />
        </h4>
        <div>
          폼듀는 클라우드 기반 설문 조사 서비스를 제공합니다.
        </div>
      </main>

      <footer>

      </footer>
     
    </div>
  )
}
