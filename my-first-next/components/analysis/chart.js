import { Grid } from "@mui/material";
import Barchart from "./barChart";
import Piechart from "./pieChart";

/*
* Todo: props로 받은 차트 종류별 출력
*/

export default function Chart(props) {

    console.log(props);
    
    return (

        <div>
            {/* {props === 'pie' ? <Barchart /> : <Piechart />} */}
            <Barchart />
            <Piechart />
        </div>

    );
}