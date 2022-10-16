import React, { useEffect, useState } from 'react'
import Square from '../../components/Square'
import { useParams } from 'react-router-dom';
import { Grid } from '@mui/material'
import axios from 'axios';
import { apiUrl } from '../../utils/api';

const Number = () => {
  const [questions, setQuestions] = useState([])
  const { round } = useParams()
  useEffect(() => {
    const init = async () => {
      try {
        if (!round) window.open(`/round`, "_self")
        const response = await axios.get(`${apiUrl}/${round.toLowerCase()}`)
        setQuestions(response.data)
      } catch {
        setQuestions([])
      }
    }
    init()
  }, [])
  return (
    <Grid style={{ textAlign: 'center', fontSize: '2vw' }}>
      <h2>Select a question number</h2>
      <Grid container columnSpacing={2} style={{ 'justifyContent': 'center' }}>
        {questions.map((question, index) => {
          return (<Square key={index} question={question}></Square>)
        })}
      </Grid>
    </Grid>
  )
};

export default Number;
