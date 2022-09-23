import Link from 'next/link';
import Head from 'next/head';

export default function Mypage() {
    return (
        <div>
            <Head>
                <title>마이페이지</title>
            </Head>
            <h4>
                <Link href="/">홈으로 돌아가기</Link>
            </h4>
            <h1>마이페이지입니다.</h1>
        </div>
    );
}