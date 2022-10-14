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
    const data = "Components may have multiple widths defined, causing the layout to change at the defined breakpoint. Width values given to larger breakpoints override those given to smaller breakpoints. For example, xs={12} sm={6} sizes a component to occupy half of the viewport width (6 columns) when viewport width is 600 or more pixels. For smaller viewports, the component fills all 12 available columns."
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
          <Grid container style={{ justifyContent: 'center', marginBottom: '30px' }}>
            <IconButton color="primary" aria-label="rules" component="label" onClick={handleOpenRule1}>
              <Info />
            </IconButton>
          </Grid>
          <Grid 
            container 
            columnSpacing={{ xs: 1, sm: 2, md: 3 }} 
            style={{ justifyContent: 'center', marginLeft: '2px' }}>
            {rounds.map((round, index) =>
              <Container key={round}>
                <Button style={{ margin: '0px 10px 0px 10px'}} variant="contained" onClick={() => handleSubjectClick(round)}>Round {index + 1}</Button>
              </Container>
            )}
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid container style={{ justifyContent: 'center', marginBottom: '30px' }}>
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
