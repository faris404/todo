import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  appBar:{
    backgroundColor:"#43a047"
  }
}))

export default function DenseAppBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar} >
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Todos
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}