import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

export default function Search() {

    const [value, setValue] = React.useState(" ");

    return (
        <Stack direction="row" spacing={2}>
            <Box sx={{ width: 700, maxWidth: '100%' }}>
                <TextField fullWidth label="검색어를 입력해 주세요." id="fullWidth" 
                                    value={value} onChange={(e) => setValue(e.target.value)}/>
            </Box>
            <Button variant="contained" size="small" onClick={() => console.log("postSearch " + value)}>검색</Button>
        </Stack>
    );
}