import Layout from "../../../../components/layout";
import { getAllPostIds, getPostData } from "../../../../lib/loadFaqs";
import Head from 'next/head';
import Date from "../../../../components/support/date";
import utilStyles from '../../../../styles/utils.module.css'
import Link from "next/link";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

export default function Post({ postData }) {

  const router = useRouter();
  const pageNum = router.pathname.split("/").pop();
  console.log("getFAQ " + pageNum);    // TODO: getNotice [faqId] 로 출력됨

  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h6 className='title'>
        <Link href="/posts/support/faq">
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
    </>
  );
}

export async function getStaticPaths() {

  const paths = getAllPostIds();

  return {
    paths: [
      { params: { faqId: '1' } },
      { params: { faqId: '2' } },
      { params: { faqId: '3' } }
    ],
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.faqId);
  return {
    props: {
      postData,
    },
  };
}

