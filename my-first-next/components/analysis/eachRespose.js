import { Grid } from "@mui/material";
import PaginationBtn from "../support/paginationBtn";

export default function EachResponse() {

    return (
        <>
            <h2>개별 응답 조회 페이지입니다.</h2>
            <h4>개별 응답 조회 목록입니다.</h4>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                <Grid item xs={3}>
                    <PaginationBtn />
                </Grid>
            </Grid>
        </>
    );
}