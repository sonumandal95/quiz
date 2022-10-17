import {
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  IconButton
} from "@mui/material";
import Divider from "@mui/material/Divider";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import ClearIcon from '@mui/icons-material/Clear';
import TimerOffIcon from '@mui/icons-material/TimerOff';
import Timer from "../../components/Timer";

const Question = () => {
  const location = useLocation();
  const question = location.state?.question;
  const [userAnswer, setUserAnswer] = useState("");
  const [openDialog, setOpenDialog] = useState(false)
  const [dialogMsg, setDialogMsg] = useState("")
  const [dialogIcon, setDialogIcon] = useState("")
  const [correctAns, setCorrectAns] = useState("")

  const timerValue = 60

  const options = {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D'
  }

  const handleAnswer = (event, value) => {
    setUserAnswer(value);
    setOpenDialog(true);

    if (question.correctAns.toLowerCase() === value.toLowerCase()) {
      setDialogIcon("success")
      setDialogMsg("Congratulations! You have given Correct Answer.")
    } else {
      setDialogIcon("failed")
      setDialogMsg(`Better Luck Next Time...`)
      setCorrectAns(question.correctAns)
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "backdropClick" || reason === "escapeKeyDown") {
      alert("Please close the window.");
    } else {
      setOpenDialog(false);
      window.open("/round", "_self");
    }
  };
  const handleBackDrop = (e) => {
    setOpenDialog(true);
  };

  const handleTimeOut = () => {
    setOpenDialog(true)
    if (dialogIcon === "") {
      setDialogIcon("warning")
      setDialogMsg(`!!! Sorry !!! Your Time is Up`)
      setCorrectAns(question.correctAns)
    }
  }

  const handleRoundNextButtonClick = (questionNumber) => {
    if (questionNumber === 10)
      window.open("/round", "_self");
    else
      window.open("numbers/round5", "_self");
  }

  const printRound = (roundNumber) => {
    const rounds = {
      "round1": 1,
      "round2": 2,
      "round3": 3,
      "round4": 4,
      "round5": 5,
    }
    return rounds[roundNumber.toLowerCase()];
  }

  const showDialogIcon = (dialogIconText) => {
    if (dialogIconText === "success") {
      return <CheckCircleIcon style={{ fontSize: '10vw', color: 'green' }} />
    }
    else if (dialogIconText === "failed") {
      return <CancelIcon style={{ fontSize: '8vw', color: 'red' }} />
    }
    else {
      return <TimerOffIcon style={{ fontSize: '8vw', color: '#efbe0b' }} />
    }
  }

  return (
    <>
      <Card variant="outlined" style={{ padding: '0% 2% 0% 2%' }}>
        <CardContent>
          <Grid style={{ margin: '1% 0% 1% 0%' }}>
            <FormLabel for="QID" style={{ fontSize: '1.5vw' }}>
              <b>Question Number: </b>
            </FormLabel>
            <FormLabel sx={{ ml: 3 }} style={{ fontSize: '1.5vw' }}>{question.id}</FormLabel>
            <FormLabel style={{ fontSize: '1.5vw', marginLeft: '10%' }}>
              <b>Round: </b>
            </FormLabel>
            <FormLabel style={{ fontSize: '1.5vw' }} sx={{ ml: 3 }}>{printRound(question.round)}</FormLabel>
            <FormLabel style={{ fontSize: '1.5vw', marginLeft: '10%' }}>
              <b>Subject: </b>
            </FormLabel>
            <FormLabel style={{ fontSize: '1.5vw' }} sx={{ ml: 3 }}>{question.subject}</FormLabel>
            {
              (question.round === "round5") ?
                null
                :
                <Timer seconds={timerValue} onTimeOut={handleTimeOut} />
            }

          </Grid>
          <Divider />
          <Grid container specing={2}>
            <Grid item lg={11} md={10} sm={10} sx={{ mt: 3 }}>
              <FormLabel sx={{ ml: 2 }} style={{ fontSize: '3vw' }}>
                <b>{question.question}</b>
              </FormLabel>
              {question.questionHindi ?
                (<FormLabel sx={{ ml: 3 }}>
                  <Typography style={{ fontSize: '3vw' }}>
                    <i>{question.questionHindi}</i>
                  </Typography>
                </FormLabel>) : null
              }
            </Grid>
            <Grid item >
              <FormControl>
                <RadioGroup
                  aria-label="question"
                  name="question"
                  value={userAnswer}
                  onChange={(e) => {
                    handleAnswer(e, e.target.value);
                  }}
                  sx={{
                    '& .MuiSvgIcon-root': {
                      fontSize: '3vw',
                    }
                  }}
                >
                  <Grid style={{ fontSize: '3vw', width: '100%' }}>
                    {question.ans.map((ans, index) => {
                      let ans1 =
                        <b style={{ fontSize: '3vw' }}>&nbsp;&nbsp;&nbsp;{options[index + 1]}. {ans} {question.ansHindi[index] ? `, ${question.ansHindi[index]}` : null}</b>
                      return question.round === "round5" ? (
                        null
                      ) : (
                        <Grid item>
                          <FormControlLabel
                            key={ans}
                            value={ans}
                            control={<Radio />}
                            label={ans1}
                          ></FormControlLabel>
                        </Grid>
                      );
                    })}
                  </Grid>
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
      </Card>
      <Grid style={{ textAlign: 'center', marginTop: '5%' }}>
        {question.round === "round5" ? <Button
          style={{
            fontSize: '1.5vw',
            borderRadius: '1rem',
            paddingLeft: '3rem',
            paddingRight: '2rem'
          }}
          variant="contained"
          onClick={() => handleRoundNextButtonClick(question.id)}
        >
          Next
        </Button> : null}</Grid>
      <Dialog
        open={openDialog}
        onClose={(e, s) => handleClose(e, s)}
        onBackdropClick={(e) => {
          handleBackDrop();
        }}
        fullWidth
        maxWidth="xl"
      >
        <DialogTitle >
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <ClearIcon style={{ fontSize: '2vw' }} />
          </IconButton >
        </DialogTitle>
        <DialogContent style={{ fontSize: '1.5vw', margin: '0% 5% 0% 5%' }}>
          <DialogContentText>
            <Typography style={{ fontSize: '1.5vw', textAlign: 'center' }}>
              {/* {question.correctAns.toLowerCase() === userAnswer.toLowerCase()
                ? <CheckCircleIcon style={{ fontSize: '10vw', color: 'green' }} />
                : <CancelIcon style={{ fontSize: '8vw', color: 'red' }} />} */}
              {showDialogIcon(dialogIcon)}
            </Typography>
            <Typography style={{ fontSize: '1.5vw', textAlign: 'center' }}>
              {dialogMsg}
            </Typography>
            {correctAns ?
              <Typography style={{ fontSize: '1.5vw', textAlign: 'center', color: 'red' }}>
                Correct Answer: {correctAns}
              </Typography>
              : null}
          </DialogContentText>
        </DialogContent>
        <DialogActions>

        </DialogActions>
      </Dialog>
    </>
  );
};

export default Question;