import Layout from "../../../../components/layout";
import { getAllPostIds, getPostData } from "../../../../lib/loadNotices";
import Head from 'next/head';
import Date from "../../../../components/date";
import utilStyles from '../../../../styles/utils.module.css'
import Link from "next/link";
import { Button } from "@mui/material";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h6 className='title'>
            <Link href="/posts/support/notice">
              <Button variant="contained" size="small">목록</Button>
            </Link>
      </h6>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {

  const paths = getAllPostIds();
  
  return {
    paths: [
      {params: {noticeId: '1'}},
      {params: {noticeId: '2'}},
      {params: {noticeId: '3'}}
    ],
    fallback: false
  }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.noticeId);
    return {
        props: {
            postData,
        },
    };
}
