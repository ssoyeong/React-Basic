import React, { useState } from "react";
import { useRouter } from 'next/router'
import { Avatar, Box, Button, Grid, Divider, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Link from 'next/link'
// import Modal from "../../components/Modal";


const MyPage = () => {
    const router = useRouter();
    const { userId } = router.query;

    //const [showModal, setShowModal] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const MypageAvatar = ({ children, ...props }) => (
        <Avatar sx={{ width:'70%', height:'70%',} } {...props}>
            {children}
        </Avatar>
    );
    
    const Item = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        border: '1px solid',
        borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
        padding: theme.spacing(5),
        textAlign: 'center'
    }));
    
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'white',
        border: '0px',
        borderRadius: '25px',
        boxShadow: 24,
        p: 4,
    };
    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            {/* divider */}
            <div style={{margin:'20px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Divider style={{width:'70%'}} />
            </div>

            {/* 나의 설문 */}
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Grid container columns={9} style={{width:'60%'}}>
                    <Grid item xs={2} style={{textAlign: 'left'}}>
                        <h4>설문 분석</h4>
                    </Grid>
                    <Grid item xs={5}>
                    </Grid>
                    <Grid item xs={2} style={{textAlign: 'right', color:'gray'}}>          
                        <Link href="/result/${userId}/surveyId" as={`/result/${userId}/surveyId`}>
                            <h4>전체 보기  &gt;</h4>
                        </Link>
                    </Grid>
                </Grid>
            </div>

            {/* 내가 만든 설문 목록 */}
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Grid container columns={{ xs: 4, sm: 8, md: 12 }} style={{width:'60%'}}>
                    {Array.from(Array(6)).map((_, index) => (
                        <Grid xs={2} sm={4} columns={2} key={index} style={{padding:'10px'}}>
                            <Item xs={2}>{index + 1}</Item>
                            <Grid container columns={2} style={{backgroundColor:'WhiteSmoke', padding: '10px'}}>
                                <Grid item xs={1} style={{textAlign: 'left'}}>
                                    <h5 style={{margin: '0px'}}>설문 {index + 1}</h5>
                                </Grid>
                                <Grid item xs={1} style={{textAlign: 'right', color:'gray'}}>
                                    {/* <h5 style={{margin: '0px'}}>...</h5> */}
                                </Grid>
                            </Grid>
                            <Grid container columns={5} style={{backgroundColor:'WhiteSmoke', padding: '0px 10px 10px 10px'}}>
                                <Grid item xs={1} style={{textAlign: 'left', borderRadius: '25px', backgroundColor: 'red'}}>
                                    <h6 style={{margin: '0px', alignContent: 'center', textAlign:'center', color:'white', padding: '1px'}}>진행중</h6> 
                                </Grid>
                                <Grid item xs={4} style={{textAlign: 'left', color:'gray', paddingLeft:'5px'}}>
                                    <h6 style={{margin: '0px'}}>2022. 01. 01 ~ 2022. 09. 30</h6>
                                </Grid>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </div>
        

            {/* divider */}
            <div style={{margin:'20px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Divider style={{width:'70%'}} />
            </div>

            {/* 내가 참여한 설문 */}
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Grid container columns={9} style={{width:'60%'}}>
                    <Grid item xs={2} style={{textAlign: 'left'}}>
                        <h4>내가 참여한 설문</h4>
                    </Grid>
                    <Grid item xs={5}>
                    </Grid>
                    <Grid item xs={2} style={{textAlign: 'right', color:'gray'}}>
                        {/* <Link href="/mypage/${userId}/mySubmitSurvey" as={`/mypage/${userId}/mySubmitSurvey`}> */}
                            <h4>전체 보기  &gt;</h4>
                        {/* </Link> */}
                    </Grid>
                </Grid>
            </div>

            {/* 내가 참여한 설문 목록 */}
            <div style={{marginBottom: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Grid container columns={{ xs: 4, sm: 8, md: 12 }} style={{width:'60%'}}>
                    {Array.from(Array(6)).map((_, index) => (
                        <Grid xs={2} sm={4} columns={2} key={index} style={{padding:'10px'}}>
                            <Item xs={2}>{index + 1}</Item>
                            <Grid container columns={2} style={{backgroundColor:'WhiteSmoke', padding: '10px'}}>
                                <h6 style={{margin: '0px'}}>2022. 06. 12 참여</h6>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    );
};

export default MyPage;

