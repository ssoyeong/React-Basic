import { Grid } from '@mui/material';
import Link from 'next/link';
import SupportMenu from './supportMenu';

export default function Header() {

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <h5 className='title'>
                        <Link href="/">홈</Link>
                    </h5>
                </Grid>
                <Grid item xs={2}>
                    <h5 className='title'>
                        <Link href="/">"폼듀"란?</Link>
                    </h5>
                </Grid>
                <Grid item xs={2}>
                    <h5 className='title'>
                        <Link href="/">설문 목록</Link>
                    </h5>
                </Grid>
                <Grid item xs={2}>
                    <h5 className='title'>
                        <Link href="/">설문 제작</Link>
                    </h5>
                </Grid>
                <Grid item xs={2}>
                    <h5 className='title'>
                        <Link
                            href={{
                                pathname: '/posts/survey/result/[surveyId]',
                                query: { surveyId: 'surveyId' },
                            }}
                        >설문 분석</Link>
                    </h5>
                </Grid>
                <Grid item xs={2}>
                    <SupportMenu />
                </Grid>
            </Grid>
            <hr />
        </div>
    );
}