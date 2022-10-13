import React from 'react';
import { Button, Link } from '@mui/material';
import styled from '@emotion/styled'

const Home = () => {
  const Container = styled.div(props => ({
    display: 'flex',
    flexDirection: props.column && 'column',
    marginRight: '20px',
    justifyContent: 'center'
  }))
  const handleNextClick = () => {
    window.open(`/subject`, "_self")
  }

  return (
    <div style={{ 'textAlign': 'center' }}>
      <h1>Click next to continue</h1>
      <Container>
        <Button variant="contained" onClick={handleNextClick}>Next</Button>
      </Container>
    </div>
  )
};

export default Home;
