import Layout from "../../../../components/layout";
import { getAllPostIds, getPostData } from "../../../../lib/posts";

export default function Post({ postData }) {
  return (
    <Layout>
        {postData.title}
        <br />
        {postData.noticeId}
        <br />
        {postData.date}
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
    const postData = getPostData(params.noticeId);
    return {
        props: {
            postData,
        },
    };
}

