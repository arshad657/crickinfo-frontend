import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableCell, styled, tableCellClasses } from '@mui/material';


const rows = [
  {
    id: 1,
    format: 'ODIs',
    mat: 31,
    hs: '93*',
    avg: 55,
    hundreds: 4,
    fifties: 9
    },
  {
    id: 1,
    format: 'T20s',
    mat: 31,
    hs: '93*',
    avg: 55,
    hundreds: 4,
    fifties: 9
    },
  {
    id: 1,
    format: 'Test',
    mat: 31,
    hs: '93*',
    avg: 55,
    hundreds: 4,
    fifties: 9
    },
];

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

export default function StatsTable() {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Format</StyledTableCell>
            <StyledTableCell>Mat</StyledTableCell>
            <StyledTableCell>HS</StyledTableCell>
            <StyledTableCell>Avg</StyledTableCell>
            <StyledTableCell>100s</StyledTableCell>
            <StyledTableCell>50s</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow 
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {row.format}
              </StyledTableCell>
              <StyledTableCell >{row.mat}</StyledTableCell>
              <StyledTableCell >{row.hs}</StyledTableCell>
              <StyledTableCell >{row.avg}</StyledTableCell>
              <StyledTableCell >{row.hundreds}</StyledTableCell>
              <StyledTableCell >{row.fifties}</StyledTableCell>
            </StyledTableRow >
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}