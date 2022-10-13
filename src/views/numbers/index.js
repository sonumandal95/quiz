import React from 'react'
import Square from '../../components/Square'
import maths from '../../questions/maths.json'
import computer from '../../questions/computer.json'
import { Grid } from '@mui/material'

const Number = () => {
    const questions = maths
    return (
        <div>
            <h1>This is Number page</h1>
            <Grid container>
                {questions.map((question) => {
                    return (<Square question={question}></Square>)
                })}
            </Grid>
        </div>
    )
};

export default Number;
