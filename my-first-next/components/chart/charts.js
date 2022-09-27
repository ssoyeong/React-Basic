import { Button } from '@mui/material';
import BarChart from './barChart';
import PieChart from './pieChart';

export default function Charts({props}) {
    console.log(props);
    alert(props);
    return (
        <div>
            <div>
                <BarChart />
                <PieChart />
            </div>
            <div>
                <Button variant="contained">응답 분석 결과 다운로드</Button>
            </div>
        </div>
    );
}