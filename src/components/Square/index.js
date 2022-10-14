import { Button } from '@mui/material';
import React, { useState } from 'react'
import styled from '@emotion/styled'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../../utils/api"

const Square = ({ question }) => {
  console.log("question: ", question)
  const [disabledButton, setDisabledButton] = useState(question.enable)
  const navigate = useNavigate();

  const handleNumberClicked = async () => {
    setDisabledButton(!disabledButton)
    const { id, round } = question;
    console.log(id)
    const response = await axios.put(`${apiUrl}/${round.toLowerCase()}/${parseInt(id)}`)
    console.log(response.data)
    navigate('/question', { state: { question } });
  }

  const Container = styled.div(props => ({
    display: 'flex',
    flexDirection: props.column && 'column',
    marginRight: '20px',
    marginTop: '20px'
  }))

  return (
    <Container>
      <Button variant="contained" size='large' disabled={!disabledButton} onClick={handleNumberClicked}>{question.id}</Button>
    </Container>
  )
}

export default Square;
