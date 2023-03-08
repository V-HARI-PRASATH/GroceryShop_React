import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import FloatingActionButtons from './AddButton';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeIcon from '@mui/icons-material/Mode';

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


export default class CustomizedTables extends React.Component {

    constructor(props)
    {
        super(props);
        this.state={Items:[]};
    }
    componentDidMount()
    {
        axios.get('http://localhost:8080/get')
        .then(response => {
          this.setState({ Items: response.data });
        })
        .catch(error => {
          console.log(error);
        });    
    }
    handleClick=(e)=>{
      console.log(e.target.id);
      var l=axios.delete('http://localhost:8080/delete/'+e.target.id);
      this.setState({Items:this.state.Items.filter(x=>x.id!=e.target.id)});
    }
    handleUpdate=(e)=>{
      var id=e.target.id;
      console.log(id);
    }
render()
{
  return(
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell align="left">Id</StyledTableCell>
          <StyledTableCell align="left">Name</StyledTableCell>
          <StyledTableCell align="left">Brand</StyledTableCell>
          <StyledTableCell align="left">Category</StyledTableCell>
          <StyledTableCell align="left">Cost</StyledTableCell>
          <StyledTableCell align="left">Count</StyledTableCell>
          <StyledTableCell align="left">Delete</StyledTableCell>
          <StyledTableCell align="left">Update</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.Items.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell align="left">{row.id}</StyledTableCell>
              <StyledTableCell align="left">{row.name}</StyledTableCell>
              <StyledTableCell align="left">{row.brand}</StyledTableCell>
              <StyledTableCell align="left">{row.category}</StyledTableCell>
              <StyledTableCell align="left">{row.cost}</StyledTableCell>
              <StyledTableCell align="left">{row.count}</StyledTableCell>
              <StyledTableCell align="left"><Button id={row.id} onClick={this.handleClick} startIcon={<DeleteIcon/>}>Delete</Button></StyledTableCell>
              <StyledTableCell align="left"><Link to={"/update/"+row.id}><Button id={row.id} onClick={this.handleUpdate} startIcon={<ModeIcon/>}>Update</Button></Link></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <FloatingActionButtons/>
    </>
  );
          }
}