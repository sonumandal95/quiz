import React from 'react'
import { Button, Grid, Link } from '@mui/material';
import styled from '@emotion/styled'

const Select = (props, route) => {

  const subjects = ["Computers", "Maths", "GK", "Science"]

  const Container = styled.div(props => ({
    display: 'flex',
    flexDirection: props.column && 'column',
    marginRight: '20px'
  }))

  const handleSubjectClick = (subject) => {
    window.open(`/numbers/${subject.toLowerCase()}`, "_self")
  }

  return (
    <div style={{ 'textAlign': 'center' }}>
      <h2>Choose subject</h2>
      <Grid container style={{ 'justifyContent': 'center' }}>
        {subjects.map((subject) => 
          <Container key={subject}>
            <Button variant="contained" onClick={() => handleSubjectClick(subject)}>{subject}</Button>
          </Container>
        )}
      </Grid>
    </div>
  )
};

export default Select;
