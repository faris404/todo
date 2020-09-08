import React,{useEffect,useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Todo from './Todo'
import axios from 'axios'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})


export default function Todos() {

  const classes = useStyles()
  const [data,setData] = useState([])

  useEffect(()=>{
    async function fetchData(){
      let result = await axios.get('/api/todos')
      setData(result.data)
    }
    fetchData()
  },[])
  
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="left">Body</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (<Todo  key={row._id} title={row.title} body={row.body} date={row.date} id={row._id} />))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}