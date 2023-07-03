import { Button } from '@mui/material';
import React, { useState } from 'react'
import styled from '@emotion/styled'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../../utils/api"

const Square = ({ question }) => {
  const [disabledButton, setDisabledButton] = useState(question.enable)
  const navigate = useNavigate();

  const handleNumberClicked = async () => {
    setDisabledButton(!disabledButton)
    const { id, round } = question;
    const response = await axios.put(`${apiUrl}/${round.toLowerCase()}/${parseInt(id)}`)
    navigate('/question', { state: { question } });
  }

  const Container = styled.div(props => ({
    display: 'flex',
    flexDirection: props.column && 'column',
    margin: '5% 2% 2% 2%',
    width: '5%'
  }))

  return (
    <Container>
      <Button style={{ fontSize: '4vw', borderRadius: '1rem', width: '100%' }} variant="contained" size='large' disabled={!disabledButton} onClick={handleNumberClicked}>{question.id}</Button>
    </Container>
  )
}

export default Square;
