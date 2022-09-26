import { useState } from 'react';
import { Button } from '@mui/material';
import Charts from '../../../../components/chart/charts';
import PieChart from '../../../../components/chart/pieChart';

export default function SurveyId() {

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
                {viewChart ? <Charts /> : <PieChart />}
            </div>
        </div>
    );
}