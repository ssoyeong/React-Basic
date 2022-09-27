import * as React from 'react';
import Head from 'next/head';
import { getSortedPostsData } from '../../../lib/loadFaqs';
import { useRouter } from 'next/router';
import SupportContent from '../../../components/support/supportContent';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Faq({ allPostsData }) {

  const router = useRouter();
  const { message } = router.query;
  // alert(message);
  console.log(message);

  const pageName = router.pathname.split("/").pop();

  return (
    <div>
      <Head>
        <title>FAQ</title>
      </Head>
      <SupportContent pageName={pageName} allPostsData={allPostsData} />
    </div>
  );
}