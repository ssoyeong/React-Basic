import { useRouter } from 'next/router'
import { useState } from 'react';
import { Button } from '@mui/material';
import Charts from '../../../../../components/chart/charts';
import PieChart from '../../../../../components/chart/pieChart';

export default function SurveyId() {

    const router = useRouter();
    const { userId } = router.query;

    const [viewChart, setViewChart] = useState(true);

    return (
        <div>
            <div>
                <h1>설문 분석</h1>
            </div>
            <div>
                <Button onClick={() => setViewChart(true)}>설문 데이터 분석</Button>
                <Button onClick={() => setViewChart(false)}>개별 응답 조회</Button>
            </div>
            <div>
                {viewChart ? <Charts props="getSurveyAnalysis"/> : <h2>개별 응답 조회 페이지입니다.</h2>}
            </div>
        </div>
    );
}