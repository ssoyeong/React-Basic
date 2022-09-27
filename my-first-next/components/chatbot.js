import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Fab from '@mui/material/Fab';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

const style = {
    top: '100%',
    left: '100%',
    transform: 'translate(100%, 100%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Popup() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <div onClick={handleOpen}>
                <Fab color="primary" aria-label="add">
                    <ContactSupportIcon />
                </Fab>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={style}>
                    <Typography id="parent-modal-title" variant="h6" component="h2">
                        1:1 문의 팝업입니다.
                    </Typography>
                    <Typography id="parent-modal-description" sx={{ mt: 2 }}>
                        1:1 문의 팝업 내용입니다.
                    </Typography>
                    <Button variant="contained" size="small" onClick={handleClose}>닫기</Button>
                </Box>
            </Modal>
        </div>
    );
}