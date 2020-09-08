import React from 'react'
import Header from '../components/header'
import Todos from '../components/Todos'
import NewTodo from '../components/NewTodo'
import Grid from '@material-ui/core/Grid'

export default function Home() {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Header />
                </Grid>
                <Grid item xs={12}>
                    <NewTodo />
                </Grid>
                <Grid item container xs={12}>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={10}>
                        <Todos />
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>

                </Grid>
            </Grid>


        </div>
    )
}
