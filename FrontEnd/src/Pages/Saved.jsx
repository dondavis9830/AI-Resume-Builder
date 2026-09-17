import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/system'
import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];



export default function Saved() {
  return (
    <div>
      <Box>
        <Typography variant='h4'
          sx={{
            mt:12,
            fontSize:'700',
            fontFamily:'fangsong',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            color:'blue',
          }}>
          All Saved Resumes
        </Typography>
      </Box>
      <Box>
        <Typography variant='h5'
          sx={{
            mt:5,
            fontWeight:'500',
            px:20,
            textAlign:'center'

        }}>
          All your created resumes are saved here for easy access.
          View, edit, download, or update your resumes anytime and
          keep your career documents organized in one place.
        </Typography>
      </Box>
      <Stack  direction="row" 
              spacing={8}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                my:5
              }}>
        <Box component="form"
              sx={{ '& > :not(style)': { m: 1, width: '100ch' } }}
              noValidate
              autoComplete="off">
           <TextField id="outlined-basic" label="Search Resume" variant="outlined" />
         </Box>
      </Stack>
      <Box sx={{width:'80%',mx:'auto'}}>
         <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell align="right">Resume</StyledTableCell>
            <StyledTableCell align="right">Job Role</StyledTableCell>
            <StyledTableCell align="right">....</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                id
              </StyledTableCell>
              <StyledTableCell align="right">a</StyledTableCell>
              <StyledTableCell align="right">b</StyledTableCell>
              <StyledTableCell align="right">c</StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
      </Box>
      

    </div>
  )
}
