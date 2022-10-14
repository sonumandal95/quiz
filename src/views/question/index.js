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
} from "@mui/material";
import Divider from "@mui/material/Divider";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

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
  };
  const handleSubmit = () => {
    if (userAnswer === "") {
      setErrMsg("Please select an answer.");
    } else {
      setErrMsg("");
      setOpenDialog(true);
    }
  };
  const handleClose = (event, reason) => {
    if (reason === "backdropClick" || reason === "escapeKeyDown") {
      alert("Please answer.");
    } else {
      setOpenDialog(false);
      window.open("/round", "_self");
    }
  };
  const handleBackDrop = (e) => {
    setOpenDialog(true);
  };
  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <Grid item lg={12} md={12} sm={12}>
            <FormLabel for="QID">
              <b>Question number: </b>
            </FormLabel>
            <FormLabel sx={{ ml: 3 }}>{question.id}</FormLabel>
          </Grid>
          <Grid item lg={12} md={12} sm={12} sx={{ mt: 3, mb: 3 }}>
            <FormLabel>
              <b>Round: </b>
            </FormLabel>
            <FormLabel sx={{ ml: 3 }}>{question.round}</FormLabel>
          </Grid>
          <Grid item lg={12} md={12} sm={12} sx={{ mt: 3, mb: 3 }}>
            <FormLabel>
              <b>Subject: </b>
            </FormLabel>
            <FormLabel sx={{ ml: 3 }}>{question.subject}</FormLabel>
          </Grid>
          <Typography
            variant="h6"
            sx={{ color: (theme) => theme.palette.error.main }}
          >
            {errMsg}
          </Typography>
          <Divider />
          <Grid item lg={12} md={12} sm={12} sx={{ mt: 3 }}>
            <FormLabel>
              <b>Question: </b>
            </FormLabel>
            <FormLabel sx={{ ml: 3 }}>{question.question}</FormLabel>
            <FormLabel sx={{ ml: 3 }}>{question.questionHindi}</FormLabel>
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
                <Grid specing={3}>
                  {question.ans.map((ans, index) => {
                    let ans1 = (
                      <i>
                        <b>&nbsp;{ans}, {question.ansHindi[index]}</b>
                      </i>
                    );

                    return (
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
        </CardContent>
        <Divider />
        <CardActions sx={{ ml: 3, mt: 2, mb: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => handleSubmit()}
            disabled={openDialog}
          >
            Submit
          </Button>
        </CardActions>
      </Card>
      <Dialog
        open={openDialog}
        onClose={(e, s) => handleClose(e, s)}
        onBackdropClick={(e) => {
          handleBackDrop();
        }}
      >
        <DialogTitle></DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>
              {question.correctAns === userAnswer.toLowerCase()
                ? "Congratulations! You have given correct Answer."
                : "Better Luck Next Time."}
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => handleClose(e)}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Question;