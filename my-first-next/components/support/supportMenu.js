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
        <h4 className='title'>고객지원</h4>
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
          <Link
            href={{
              pathname: '/posts/support/notice',
              query: { message: 'getNotification' },
            }}
          >공지사항</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {/* <Link href={`/posts/support/faq`}>
            <a>FAQ</a>
          </Link> */}
          <Link
            href={{
              pathname: '/posts/support/faq',
              query: { message: 'getFAQ' },
            }}
          >FAQ</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
