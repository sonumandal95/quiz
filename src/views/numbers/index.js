import React, { useEffect, useState } from 'react'
import Square from '../../components/Square'
import { useParams } from 'react-router-dom';
import { Grid } from '@mui/material'
import axios from 'axios';

const Number = () => {
  const [questions, setQuestions] = useState([])
  const { subject } = useParams()
  useEffect(() => {
    const init = async () => {
      try {
        if (!subject) window.open(`/subject`, "_self")
        const response = await axios.get(`http://localhost:5000/${subject.toLowerCase()}`)
        console.log(response)
        setQuestions(response.data)
      } catch {
        setQuestions([])
      }
    }
    init()
  }, [])
  return (
    <div style={{ 'textAlign': 'center' }}>
      <h1>Select a question number</h1>
      <Grid container>
        {questions.map((question, index) => {
          return (<Square key={index} question={question}></Square>)
        })}
      </Grid>
    </div>
  )
};

export default Number;
