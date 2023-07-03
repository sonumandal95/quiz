import React, { useEffect, useState } from 'react'
import Square from '../../components/Square'
import { useParams } from 'react-router-dom';
import { Grid, Button } from '@mui/material'
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

  const handleBuzzerRoundStartClick = async () => {
    window.open('/buzzerRound', '_self')
  }

  // round4 is buzzer round

  return (
    <Grid style={{ textAlign: 'center', fontSize: '2vw' }}>
      {round === "round4" ? <h2>Start</h2> : <h2>Select a question number</h2>}
      <Grid container columnSpacing={2} style={{ 'justifyContent': 'center' }}>
        {
          round === "round4"
            ?
            <>
              <Button
                style={{
                  fontSize: '1.5vw',
                  borderRadius: '1rem',
                  paddingLeft: '3rem',
                  paddingRight: '2rem'
                }}
                variant="contained"
                onClick={handleBuzzerRoundStartClick}
              >
                Next
              </Button>
            </>
            :
            <>
              {
                questions.map((question, index) => {
                  return (<Square key={index} question={question}></Square>)
                })}
            </>
        }
      </Grid>
      <Button
        style={{
          fontSize: '1.5vw',
          borderRadius: '1rem',
          paddingLeft: '3rem',
          paddingRight: '2rem',
          marginTop: '10%'
        }}
        variant="contained"
        onClick={() => window.open('/round', "_self")}
      >
        Back
      </Button>
    </Grid>
  )
};

export default Number;
