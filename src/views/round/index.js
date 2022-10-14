import React from 'react'
import { Button, Grid, Card, CardContent } from '@mui/material';
import styled from '@emotion/styled'

const Round = () => {
  const rounds = ["round1", "round2", "round3", "round4"]
  const Container = styled.div(props => ({
    display: 'flex',
    flexDirection: props.column && 'column',
    marginRight: '20px'
  }))

  const handleSubjectClick = (round) => {
    window.open(`/numbers/${round.toLowerCase()}`, "_self")
  }

  return (
    <div style={{ 'textAlign': 'center' }}>
      <h2>Rounds</h2>
      <Card variant="outlined" style={{ 'paddingTop': '10'}}>
        <Grid container style={{ 'justifyContent': 'center' }}>
          {rounds.map((round, index) =>
            <Container key={round}>
              <Button variant="contained" onClick={() => handleSubjectClick(round)}>Round {index + 1}</Button>
            </Container>
          )}
        </Grid>
      </Card>
    </div>
  )
};

export default Round;
