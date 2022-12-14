import { useState } from 'react';
import { Button } from '@mui/material';
import DataAnalysis from '../../../../components/analysis/dataAnalysis';
import EachResponse from '../../../../components/analysis/eachRespose';
import { useRouter } from 'next/router';

export default function SurveyId() {

    const router = useRouter();
    const { surveyId } = router.query;
    const { message } = router.query;
    console.log(message + " " + surveyId);
    // alert(message + " " + surveyId);

    const [viewChart, setViewChart] = useState(true);

    return (
        <div>
            <div>
                <h1>설문 분석</h1>
            </div>
            <div>
                {viewChart ? (
                    <><Button onClick={() => setViewChart(true)} variant="contained">설문 데이터 분석</Button><Button onClick={() => setViewChart(false)} variant="outlined">개별 응답 조회</Button></>
                ) : (
                    <><Button onClick={() => setViewChart(true)} variant="outlined">설문 데이터 분석</Button><Button onClick={() => setViewChart(false)} variant="contained">개별 응답 조회</Button></>
                )}
            </div>
            <div>
                {viewChart ? <DataAnalysis message="getDataAnaylsis"/> : <EachResponse message="getEachResponse" />}
            </div>
        </div>
    );
}