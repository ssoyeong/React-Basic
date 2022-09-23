import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <header>
        <Image
          priority
          src="/../public/images/header.jpg"
          height={261}
          width={1680}
          alt=""
        />
      </header>
      <h1>Form Duo 홈 화면입니다.</h1>
      <h4 className='title'>
        <Link href="/posts/mypage">마이페이지로 가기</Link>
      </h4>
    </div>
  )
}
