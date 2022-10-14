import React, { useState } from 'react'
import {
  Button,
  Grid,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography
} from '@mui/material';
import styled from '@emotion/styled'
import Info from '@mui/icons-material/Info'

const Round = () => {
  const [openRuleDialog, setOpenRuleDialog] = useState(false)
  const [rules, setRules] = useState("");
  const rounds = ["round1", "round2", "round3", "round4"]
  const Container = styled.div(props => ({
    display: 'flex',
    flexDirection: props.column && 'column',
  }))

  const Box = styled.div(props => ({
    display: 'flex',
    flexDirection: props.column && 'column',
    borderWidth: '1px',
    borderColor: '#dbdbdb',
    borderRadius: '5px',
    borderStyle: 'solid',
    padding: '15px',
    marginBottom: '20px'
  }))

  const handleSubjectClick = (round) => {
    window.open(`/numbers/${round.toLowerCase()}`, "_self")
  }

  const handleOpenRule1 = () => {
    const data = "Rule 1"
    setRules(data);
    setOpenRuleDialog(true);
  }

  const handleOpenRule2 = () => {
    const data = "Rule2"
    setRules(data);
    setOpenRuleDialog(true);
  }

  return (
    <div style={{ 'textAlign': 'center' }}>
      <h2>Rounds</h2>
      <Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid container style={{ justifyContent: 'center', marginBottom: 20 }}>
            <IconButton color="primary" aria-label="rules" component="label" onClick={handleOpenRule1}>
              <Info />
            </IconButton>
          </Grid>
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ justifyContent: 'center' }}>
            {rounds.map((round, index) =>
              <Container key={round}>
                <Button variant="contained" onClick={() => handleSubjectClick(round)}>Round {index + 1}</Button>
              </Container>
            )}
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid container style={{ justifyContent: 'center', marginBottom: 20 }}>
            <IconButton color="primary" aria-label="rules" component="label" onClick={handleOpenRule2}>
              <Info />
            </IconButton>
          </Grid>
          <Grid container rowSpacing={1} style={{ 'justifyContent': 'center' }}>
            <Container>
              <Button variant="contained">Round 5</Button>
            </Container>
          </Grid>
        </Grid>
      </Box>
      <Dialog open={openRuleDialog} onClose={() => setOpenRuleDialog(!openRuleDialog)} >
        <DialogTitle>Rules</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>
              {rules}
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="primary" size="small" onClick={() => setOpenRuleDialog(!openRuleDialog)}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
};

export default Round;
