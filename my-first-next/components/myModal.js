import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

  function ChildModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <React.Fragment>
            <Button variant="contained" size="small" onClick={handleOpen}>자식 팝업 열기</Button>
            <Modal
                hideBackdrop
                open={open}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={style}>
                    <Typography id="child-modal-title" variant="h6" component="h2">
                        자식 팝업입니다.
                    </Typography>
                    <Typography id="child-modal-description" sx={{ mt: 2 }}>
                        안녕하세요, 자식 팝업 내용입니다.
                    </Typography>
                    <Button variant="contained" size="small" onClick={handleClose}>자식 팝업 닫기</Button>
                </Box>
            </Modal>
        </React.Fragment>
    );
}

export default function MyModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return (
        <div>
            <Button variant="contained" size="small" onClick={handleOpen}>그냥 만들어본 팝업</Button>
            <Modal
                open={open}
                // onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={style}>
                    <Typography id="parent-modal-title" variant="h6" component="h2">
                        부모 팝업입니다.
                    </Typography>
                    <Typography id="parent-modal-description" sx={{ mt: 2 }}>
                        안녕하세요, 부모 팝업 내용입니다.
                    </Typography>
                    <ChildModal />
                    <Button variant="contained" size="small" onClick={handleClose}>부모 팝업 닫기</Button>
                </Box>
            </Modal>
        </div>
    );
}