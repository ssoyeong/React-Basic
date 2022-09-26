import Image from 'next/image';
import { Stack } from '@mui/material';
import Link from 'next/link';
import SupportMenu from './supportMenu';
import ResponsiveAppBar from './appBar';

export default function Header() {

    return (
        // <Image
        //   priority
        //   src="/../public/images/header.jpg"
        //   height={261}
        //   width={1680}
        //   alt=""
        // />
        <div>
        {/* <Stack direction="row" spacing={7} alignItems="center">
            <h6 className='title'>
                <Link href="/posts/mypage"> </Link>
            </h6>
            <h6 className='title'>
                <Link href="/">홈</Link>
            </h6>
            <h6 className='title'>
                <Link href="/posts/mypage">폼듀란?</Link>
            </h6>
            <h6 className='title'>
                <Link href="/posts/mypage">설문 목록</Link>
            </h6>
            <h6 className='title'>
                <Link href="/posts/mypage">설문 제작</Link>
            </h6>
            <h6 className='title'>
                <Link href="/posts/mypage">설문 분석</Link>
            </h6>
            <SupportMenu />
        </Stack> */}
        <ResponsiveAppBar />
        <Stack direction="row" spacing={2} alignItems="center">
            <h6 className='title'>
                <Link href="/posts/survey/result/surveyId">결과 분석</Link>
            </h6>
        <SupportMenu />
        </Stack>
        </div>

    );
}