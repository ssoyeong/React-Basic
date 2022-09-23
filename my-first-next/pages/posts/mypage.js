import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';

export default function Mypage() {
    return (
        <>
            <Head>
                <title>전소영님의 페이지</title>
                <Script
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="laxyOnload"
                    onLoad={() =>
                        console.log(`script loaded correctly, ...`)
                    }
                />
            </Head>
            <h4>
                <Link href="/">Back to home</Link>
            </h4>
            <h1>This my Mypage</h1>
        </>
    );
}