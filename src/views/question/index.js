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
import Timer from "../../components/Timer";

const Question = () => {
  const location = useLocation();
  const question = location.state?.question;
  const [userAnswer, setUserAnswer] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  console.log("question", question);
  const handleAnswer = (event, value) => {
    console.log(value);
    setUserAnswer(value);
    setOpenDialog(true);
  };

  // const handleSubmit = () => {
  //   if (userAnswer === "") {
  //     setErrMsg("Please select an answer.");
  //   } else {
  //     setErrMsg("");
  //     setOpenDialog(true);
  //   }
  // };
  const handleClose = (event, reason) => {
    if (reason === "backdropClick" || reason === "escapeKeyDown") {
      alert("Please close.");
    } else {
      setOpenDialog(false);
      window.open("/round", "_self");
    }
  };
  const handleBackDrop = (e) => {
    setOpenDialog(true);
  };

  // const printDialogText = () => { 
  // // Need this funtion to print correct dialog message and icon
  //   const text = (question.correctAns.toLowerCase() === userAnswer.toLowerCase())
  //               ? "Congratulations! You have given correct Answer."
  //               : "Better Luck Next Time.";
  // };

  const handleTimeOut = () => {
    console.log("time out")
    setOpenDialog(true);
    window.open("/round", "_self");
  }

  return (
    <>
      <Card variant="outlined" style={{ padding: '0% 2% 0% 2%' }}>
        <CardContent>
          <Grid style={{ margin: '1% 0% 1% 0%' }}>
            <FormLabel for="QID" style={{ fontSize: '1.5vw' }}>
              <b>Question number: </b>
            </FormLabel>
            <FormLabel sx={{ ml: 3 }} style={{ fontSize: '1.5vw' }}>{question.id}</FormLabel>
            <FormLabel style={{ fontSize: '1.5vw', marginLeft: '10%' }}>
              <b>Round: </b>
            </FormLabel>
            <FormLabel style={{ fontSize: '1.5vw' }} sx={{ ml: 3 }}>{question.round}</FormLabel>
            <FormLabel style={{ fontSize: '1.5vw', marginLeft: '10%' }}>
              <b>Subject: </b>
            </FormLabel>
            <FormLabel style={{ fontSize: '1.5vw' }} sx={{ ml: 3 }}>{question.subject}</FormLabel>
            <Timer seconds={60} onTimeOut={handleTimeOut} />
          </Grid>
          <Typography
            variant="h6"
            sx={{ color: (theme) => theme.palette.error.main }}
            style={{ fontSize: '1.5vw' }}
          >
            {errMsg}
          </Typography>
          <Divider />
          <Grid container specing={2}>
            <Grid item lg={11} md={10} sm={10} sx={{ mt: 3 }}>
              <FormLabel sx={{ ml: 2 }} style={{ fontSize: '3.5vw' }}>
                <b>{question.question}</b>
              </FormLabel>
              <FormLabel sx={{ ml: 3 }}>
                <Typography style={{ fontSize: '3.5vw' }}>
                  <i>{question.questionHindi}</i>
                </Typography>
              </FormLabel>
            </Grid>
            <Grid item lg={12} md={12} sm={12}>
              <FormControl>
                <RadioGroup
                  aria-label="question"
                  name="question"
                  value={userAnswer}
                  onChange={(e) => {
                    handleAnswer(e, e.target.value);
                  }}
                >
                  <Grid specing={3} style={{ fontSize: '3.5vw' }}>
                    {question.ans.map((ans, index) => {
                      let ans1 = (
                        <>
                          <b style={{ fontSize: '2vw' }}>&nbsp;&nbsp;&nbsp;{ans}</b>
                          <br />
                          <i style={{ fontSize: '2vw' }}>&nbsp;&nbsp;&nbsp;{question.ansHindi[index]}</i>
                        </>
                      );

                      return question.round === "round4" ? (
                        ""
                      ) : (
                        <Grid item lg={6} md={6} sm={6} sx={{ mt: 3 }}>
                          <FormControlLabel
                            key={ans}
                            sx={{ ml: 3 }}
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
        {/* <CardActions sx={{ ml: 3, mt: 2, mb: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => handleSubmit()}
            disabled={openDialog}
          >
            Submit
          </Button>
        </CardActions> */}
      </Card>
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
              {question.correctAns.toLowerCase() === userAnswer.toLowerCase()
                ? <CheckCircleIcon style={{ fontSize: '10vw', color: 'green' }} />
                : <CancelIcon style={{ fontSize: '8vw', color: 'red' }} />}
            </Typography>
            <Typography style={{ fontSize: '1.5vw', textAlign: 'center' }}>
              {question.correctAns.toLowerCase() === userAnswer.toLowerCase()
                ? "Congratulations! You have given correct Answer."
                : "Better Luck Next Time."}
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>

        </DialogActions>
      </Dialog>
    </>
  );
};

export default Question;