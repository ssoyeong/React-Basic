import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';

export default function SupportMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        size="small"
      >
        <h5 className='title'>고객지원</h5>
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link href={`/posts/support/notice`}>
          <a>공지사항</a>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={`/posts/support/faq`}>
          <a>FAQ</a>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={`/posts/mypage`}>
          <a>1:1 문의</a>
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
