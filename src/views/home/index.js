import React from 'react';
import { Button, Grid } from '@mui/material';
import styled from '@emotion/styled'

const Home = () => {
  const Container = styled.div(props => ({
    display: 'flex',
    flexDirection: props.column && 'column',
    marginTop: '150px',
    justifyContent: 'center'
  }))
  const handleNextClick = () => {
    window.open(`/round`, "_self")
  }

  return (
    <div style={{ 'textAlign': 'center' }}>
      <h2>St. Robert's High School, Parsudih</h2>
      <Grid><img width={250} height={250} src="schoolLogo.png" /></Grid>
      <h2>Welcome to Science Quiz</h2>
      <Container>
        <Button variant="contained" onClick={handleNextClick}>Next</Button>
      </Container>
    </div>
  )
};

export default Home;
