import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import utilStyles from '../../../styles/utils.module.css';
import { getSortedPostsData } from '../../../lib/loadFaqs';
import Date from '../../../components/date';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import MyModal from '../../../components/myModal';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Notice({ allPostsData }) {
    return (
        <div>
            <Head>
                <title>FAQ</title>
            </Head>
            <h1>FAQ 페이지입니다.</h1>
            <div>
                <Stack direction="row" spacing={2}>
                    <Box sx={{ width: 700, maxWidth: '100%' }}>
                        <TextField fullWidth label="검색어를 입력해 주세요." id="fullWidth"/>
                    </Box>
                    <Button variant="contained" size="small">검색</Button>
                </Stack>
            </div>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>전체 FAQ</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/support/faq/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
            <MyModal />
        </div>
    );
}