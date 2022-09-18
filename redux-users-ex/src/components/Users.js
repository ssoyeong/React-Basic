import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


const UserList = React.memo(function UserList({users, onToggle, onRemove}) {
    return (
    <Box sx = {{width:'100%'}}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Toggle</TableCell>
            <TableCell align="right">Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              style={{textDecoration: user.done ? 'line-through' : 'none',
                        color: user.done ? 'red' : 'black'}}
            >
              <TableCell align="right">{user.id}</TableCell>
              <TableCell align="right">{user.text}</TableCell>
              <TableCell align="right">
                <Button variant="contained" size="small" onClick={() => (onToggle(user.id))}>토글</Button>
              </TableCell>
              <TableCell align="right">
                <Button variant="contained" size="small" onClick={() => (onRemove(user.id))}>삭제</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    );
});


function Users({users, onCreate, onRemove, onToggle}) {

    const [text, setText] = useState("");
    const onChange = e => setText(e.target.value);
    const onSubmit = e => {
        e.preventDefault();
        onCreate(text);
        setText('');
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <TextField id="outlined-basic" label="이름" variant="outlined"
                        value={text} onChange={onChange}/>
                <Button variant="contained" size="small" type="submit">등록</Button>
            </form>
            <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
        </div>
    );
}

export default Users;