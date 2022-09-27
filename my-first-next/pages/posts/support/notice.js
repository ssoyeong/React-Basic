import * as React from 'react';
import Head from 'next/head';
import { getSortedPostsData } from '../../../lib/loadNotices';
import SupportContent from '../../../components/support/supportContent';
import { useRouter } from 'next/router';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();

    return {
        props: {
            allPostsData,
        },
    };
}

export default function Notice({allPostsData}) {

    const router = useRouter();
    const { message } = router.query;
    // alert(message);
    console.log(message);

    const pageName = router.pathname.split("/").pop();

    return (
        <div>
            <Head>
                <title>공지사항</title>
            </Head>
            <SupportContent pageName={pageName} allPostsData={allPostsData}/>
        </div>
    );
}