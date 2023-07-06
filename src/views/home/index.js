import React from 'react';
import { Button, Grid } from '@mui/material';
import styled from '@emotion/styled'

const Home = () => {
  const Container = styled.div(props => ({
    display: 'flex',
    justifyContent: 'center',
    verticalAlign: 'middle',
    textAlign: 'center',
    fontSize: '1.9vw'
  }))

  const handleNextClick = () => {
    window.open(`/round`, "_self")
  }

  return (
    <Container>
      <Grid rowSpacing={2}>
        <h2>St. Robert's High School, Parsudih</h2>
        <img width={'50%'} height={'50%'} src="schoolLogo.png" />
        <h1>Welcome to Science Quiz</h1>
        <Button style={{ fontSize: '1.5vw', padding: '0% 2% 0% 2%' }} variant="contained" onClick={handleNextClick}>Next</Button>
      </Grid>
    </Container>
  )
};

export default Home;
