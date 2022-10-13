import { Button } from '@mui/material';
import React from 'react'
import styled from '@emotion/styled'

const Square = ({ question }) => {

  const handleNumberClicked = () => {
    question.enable = false;
  }

  const Container = styled.div(props => ({
    display: 'flex',
    flexDirection: props.column && 'column',
    marginRight: '20px'
  }))

  return (
    <Container>
      <Button variant="outlined" size='large' disabled={!question.enable} onClick={handleNumberClicked}>{question.id}</Button>
    </Container>
  )
}

export default Square;
