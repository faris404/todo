import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import axios from 'axios'

const useStyles = makeStyles(theme => ({
    input: {
        width: 500,
        margin: theme.spacing(1),
    }
}))


function NewTodo() {

    const classes = useStyles()
    const [isFormOpen, setFormOpen] = useState(false)
    const [data, setData] = useState({})
    const openForm = () => {
        setFormOpen(true)
    }

    const onCloseForm = () => {
        setFormOpen(false)
    }

    const onChangeInputs = e => {
        let key = e.target.id
        let val = e.target.value
        setData({ ...data, [key]: val })

    }
    const onSubmit = (e) => {
        e.preventDefault()
        axios.post('/api/todos', data)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
        onCloseForm()
    }
    return (
        <div>
            <IconButton style={{
                backgroundColor: "#43a047",
                borderRadius: "5px",
                color: "#ffffff",
                fontSize: "20px"
            }}><AddCircleIcon onClick={openForm} />&nbsp;new</IconButton>

            <Dialog open={isFormOpen} onClose={onCloseForm} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">New</DialogTitle>
                <DialogContent>
                    <TextField
                        onChange={onChangeInputs}
                        id="title" size="small" className={classes.input} label="title" variant="outlined" /><br />
                    <TextField id="body"
                        onChange={onChangeInputs}
                        size="small" className={classes.input} label="body" variant="outlined" />
                    <TextField
                        id="date"
                        label="date"
                        type="date"
                        onChange={onChangeInputs}
                        className={classes.input}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onCloseForm} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={onSubmit} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>

        </div>
    )
}


export default NewTodo