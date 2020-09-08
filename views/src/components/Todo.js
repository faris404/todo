import React, { useState } from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import DialogContentText from '@material-ui/core/DialogContentText'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'


const useStyles = makeStyles(theme => ({
    input: {
        width: 500,
        margin: theme.spacing(1),
    }
}))


export default function Todo(props) {
    const { id, title, body, date, } = props

    const classes = useStyles()
    const [isOpenEditForm, setOpenEditForm] = useState(false)
    const [isOpenDeleteDialog, setOpenDeleteDialog] = useState(false)
    const [data, setData] = useState({})


    const handleClickOpenEditForm = () => {
        setOpenEditForm(true)
    }

    const handleCloseEditForm = () => {
        setData({})
        setOpenEditForm(false)
    }
    const handleClickOpenDeleteDialog = () => {
        setOpenDeleteDialog(true)
    }

    const handleCloseDeleteDialog = () => {
        setOpenDeleteDialog(false)
    }
    const onSubmintEditForm = () => {
        axios.patch(`/api/todos/${id}`, {"updateDoc":data})
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
        handleCloseEditForm()

    }

    const onDelete = () => {
        axios.delete(`/api/todos/${id}`)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
        handleCloseDeleteDialog()
    }

    const onInputChanges = e => {
        let key = e.target.id
        let val = e.target.value
        setData({ ...data, [key]: val })
    }

    const getDate = () => {
        let d = new Date(date)
        let dateOut = `${d.getFullYear()}-`

        if ((d.getMonth() + 1) < 10) {
            dateOut += `0${d.getMonth() + 1}-`
        } else {
            dateOut += `${d.getMonth() + 1}-`
        }

        if ((d.getDate() + 1) < 10) {
            dateOut += `0${d.getDate()}`
        } else {
            dateOut += `${d.getDate()}`
        }

        return dateOut
    }

    return (
        <TableRow>
            <TableCell component="th" scope="row">
                {title}
            </TableCell>
            <TableCell align="left">{body}</TableCell>
            <TableCell align="left">{getDate()}</TableCell>
            <TableCell align="left">
                <IconButton onClick={handleClickOpenEditForm}>
                    <EditIcon fontSize="small" color="primary" />
                </IconButton>
                <IconButton onClick={handleClickOpenDeleteDialog}>
                    <DeleteIcon fontSize="small" color="secondary" />
                </IconButton>
            </TableCell>

            <Dialog open={isOpenEditForm} onClose={handleCloseEditForm} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit</DialogTitle>
                <DialogContent>
                    <TextField onChange={onInputChanges} id="title" defaultValue={title} size="small" className={classes.input} label="title" variant="outlined" /><br />
                    <TextField id="body" onChange={onInputChanges} defaultValue={body} size="small" className={classes.input} label="body" variant="outlined" />
                    <TextField
                        id="date"
                        label="date"
                        type="date"
                        defaultValue={getDate()}
                        onChange={onInputChanges}
                        className={classes.input}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseEditForm} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={onSubmintEditForm} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={isOpenDeleteDialog}
                onClose={handleCloseDeleteDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure want to delete this task ?
          </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDeleteDialog} color="primary">
                        No
          </Button>
                    <Button onClick={onDelete} color="primary" autoFocus>
                        Yes
          </Button>
                </DialogActions>
            </Dialog>
        </TableRow>


    )
}