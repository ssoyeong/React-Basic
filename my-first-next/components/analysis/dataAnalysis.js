import { Button, Grid } from '@mui/material';
import BarChart from './barChart';
import PieChart from './pieChart';
import Chart from './chart';

export default function DataAnalysis(props) {

    console.log(props);

    // const chartTypes = ['bar', 'pie', 'line', 'scatterplot'];

    return (
        <div>
            <div>
                {/* {chartTypes.map((type) => {return (<Chart props={type} />)})} */}
                <BarChart />
                <PieChart />
            </div>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                <Grid item xs={3}>
                    <Button variant="contained" onClick={() => console.log("downloadDataAnalysis")}>응답 분석 결과 다운로드</Button>
                </Grid>
            </Grid>
        </div>
    );
}