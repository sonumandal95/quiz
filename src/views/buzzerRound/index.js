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
  IconButton,
  Container,
  Box
} from "@mui/material";
import Divider from "@mui/material/Divider";
import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import ClearIcon from '@mui/icons-material/Clear';
import TimerOffIcon from '@mui/icons-material/TimerOff';
import Visibility from "@mui/icons-material/Visibility";
import TimerWithReset from "../../components/TimerWithReset";
import axios from 'axios'
import { apiUrl } from '../../utils/api';

const BuzzerRound = () => {
  const defaultTimerValue = 45
  const [questions, setQuestions] = useState("");
  const [question, setQuestion] = useState({});
  const [openDialog, setOpenDialog] = useState(false)
  const [dialogMsg, setDialogMsg] = useState("")
  const [dialogIcon, setDialogIcon] = useState("")
  const [correctAns, setCorrectAns] = useState("")
  const ref = useRef();

  useEffect(() => {
    const init = async () => {
      try {
        const response = await axios.get(`${apiUrl}/round4`)
        console.log(response.data)
        setQuestions(response.data)
        setQuestion(response.data[0])
      } catch {
        setQuestions([])
        setQuestion({})
      }
    }
    init()
  }, [])

  const handleClose = (event, reason) => {
    if (reason === "backdropClick" || reason === "escapeKeyDown") {
      alert("Please close the window.");
    } else {
      if (question.id === 10) window.open("/round", "_self");
      setOpenDialog(false);
      setQuestion(questions[question.id])
      ref.current.resetTimer()
    }
  };
  const handleBackDrop = (e) => {
    setOpenDialog(true);
  };

  const handleTimeOut = () => {
    if (!openDialog) {
      setOpenDialog(true)
      setDialogIcon("warning")
      setDialogMsg(`!!! Sorry !!! Your Time is Up`)
      setCorrectAns(question.correctAns)
    }
  }

  const handleRoundNextButtonClick = () => {
    ref.current.forceStopTimer()
    setOpenDialog(true)
    setDialogIcon("showAnswer")
    setDialogMsg("")
    setCorrectAns(question.correctAns)
  }

  const showDialogIcon = (dialogIconText) => {
    if (dialogIconText === "success") {
      return <CheckCircleIcon style={{ fontSize: '10vw', color: 'green' }} />
    }
    else if (dialogIconText === "failed") {
      return <CancelIcon style={{ fontSize: '8vw', color: 'red' }} />
    }
    else if (dialogIconText === "showAnswer") {
      return <Visibility style={{ fontSize: '8vw', color: 'green' }} />
    }
    else {
      return <TimerOffIcon style={{ fontSize: '8vw', color: '#efbe0b' }} />
    }
  }

  return (
    <>
      <Box>
        <Card variant="outlined" style={{ padding: '0% 2% 0% 2%' }}>
          <CardContent>
            <Grid style={{ margin: '1% 0% 1% 0%' }}>
              {/* <FormLabel for="QID" style={{ fontSize: '1.5vw' }}>
              <b>Question Number: </b>
            </FormLabel> */}
              <FormLabel sx={{ ml: 3 }} style={{ fontSize: '1.5vw' }}>Question Number: {question.id}</FormLabel>
              <FormLabel style={{ fontSize: '1.5vw', marginLeft: '10%' }}>
                <b>Round: </b>
              </FormLabel>
              <FormLabel style={{ fontSize: '1.5vw' }} sx={{ ml: 3 }}>Buzzer Round</FormLabel>
              <FormLabel style={{ fontSize: '1.5vw', right: '-10' }} sx={{ ml: 3 }}>
                <TimerWithReset ref={ref} seconds={defaultTimerValue} onTimeOut={handleTimeOut} />
              </FormLabel>


            </Grid>
            <Divider />
            <Grid container specing={2}>
              <Grid item lg={11} md={10} sm={10} sx={{ mt: 3 }}>
                <FormLabel sx={{ ml: 2 }} style={{ fontSize: '5vw' }}>
                  <b>{question.question}</b>
                </FormLabel>
                {question.questionHindi ?
                  (<FormLabel sx={{ ml: 3 }}>
                    <Typography style={{ fontSize: '5vw' }}>
                      <i>{question.questionHindi}</i>
                    </Typography>
                  </FormLabel>) : null
                }
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
      <div style={{
        flexDirection: 'row',
        marginTop: '2rem',
        display: 'flex',
        justifyContent: 'center'
      }}
      >
        <Button
          style={{
            fontSize: '2.5vw',
            borderRadius: '1rem',
            paddingLeft: '3rem',
            paddingRight: '2rem',
          }}
          variant="contained"
          onClick={() => handleRoundNextButtonClick()}
        >
          Next
        </Button>
      </div>
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
              {showDialogIcon(dialogIcon)}
            </Typography>
            <Typography style={{ fontSize: '1.5vw', textAlign: 'center' }}>
              {dialogMsg}
            </Typography>
            {correctAns ?
              <Typography style={{ fontSize: '1.5vw', textAlign: 'center', color: 'green' }}>
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

export default BuzzerRound;