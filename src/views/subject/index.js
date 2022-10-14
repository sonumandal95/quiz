import React from 'react'
import { Button, Grid, Link } from '@mui/material';
import styled from '@emotion/styled'

const Subject = (props, route) => {

  const subjects = ["round1", "round2", "round3", "round4"]

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
        {subjects.map((subject, index) => 
          <Container key={subject}>
            <Button variant="contained" onClick={() => handleSubjectClick(subject)}>Round {index + 1}</Button>
          </Container>
        )}
      </Grid>
    </div>
  )
};

export default Subject;
