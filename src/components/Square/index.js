import { Button } from '@mui/material';
import React, {useState} from 'react'
import styled from '@emotion/styled'

const Square = ({ question }) => {
  const [disabledButton, setDisabledButton] = useState(question.enable)

  const handleNumberClicked = () => {
    setDisabledButton(!disabledButton)
    const id = question.id;
    console.log(id)
    // call api this id
    // open next page
  }

  const Container = styled.div(props => ({
    display: 'flex',
    flexDirection: props.column && 'column',
    marginRight: '20px'
  }))

  return (
    <Container>
      <Button variant="contained" size='large' disabled={!disabledButton} onClick={handleNumberClicked}>{question.id}</Button>
    </Container>
  )
}

export default Square;
