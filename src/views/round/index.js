import React, { useState } from "react";
import {
  Button,
  Grid,
  IconButton,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import Info from "@mui/icons-material/Info";

const Round = () => {
  const [openRuleDialog, setOpenRuleDialog] = useState(false);
  const [rules, setRules] = useState([]);
  const rounds = ["round1", "round2", "round3"];
  const roundNames = {
    "round1": "Science",
    "round2": "Maths",
    "round3": "Computer"
  }
  const Container = styled.div((props) => ({
    display: "flex",
    flexDirection: props.column && "column",
    margin: '0% 1% 0% 1%'
  }));

  const Box = styled.div((props) => ({
    display: "flex",
    flexDirection: props.column && "column",
    borderWidth: ".5%",
    borderColor: "#dbdbdb",
    borderStyle: "solid",
    padding: "2%",
    marginBottom: "3%",
  }));

  const handleSubjectClick = (round) => {
    window.open(`/numbers/${round.toLowerCase()}`, "_self");
  };

  const handleOpenRule1 = () => {
    const data = [
      "क्विज में 5 राउंड होंगे।",
      "पहले 4 राउंड में प्रत्येक ग्रुप से पूछे जाने वाले प्रश्नों (Questions) के चार विकल्प (Options) होंगे प्रश्न समाप्त होने के बाद सही विकल्प (Option) को उत्तर दे।",
      "प्रत्येक राउंड में प्रत्येक ग्रुप से दो दो प्रश्न पूछे जाएंगे। जिस ग्रुप से प्रश्न पूछा जाएगा वे 1 से 10 में किसी भी प्रश्न का चुनाव कर सकते हैं।",
      "प्रत्येक सही उत्तर (Answer) के लिए 10 marks दिए जाएंगे। गलत उत्तर के लिए कोई marks नहीं दिया जाएगा, पहले 4 राउंड में कोई Negative marks नहीं है।",
      "प्रत्येक प्रश्न (Question) का उत्तर (Answer) देने के लिए 60 सेकंड का समय दिया जाएगा।",
      "पहले 4 राउंड (Round) में प्रश्न (Question), दसरे ग्रुप को पास नहीं होंगे।"
    ]
    setRules(data);
    setOpenRuleDialog(true);
  };

  const handleOpenRule2 = () => {
    const data = [
      "पहले 4 Round की तरह इस राउंड में भी प्रत्येक Group से दो दो प्रश्न पुचे जाएंगे।",
      "इस Round में सही उत्तर (Answer) के लिए 10 marks दिए जाएंगे। गलत उत्तर के लिए minus 5 marks होंगे उत्तर नहीं जान्ने पर आप Question पास कर सकते हैं। पास प्रश्न के लिए minus marks नहीं है।",
      "पास Question अलग ग्रुप के पास जायेगा और उनके सही Answer के लिए 5 marks और गलत उत्तर के लिए - 5 marks दीये जाएंगे।",
    ]
    setRules(data);
    setOpenRuleDialog(true);
  };

  const handleDialogClose = () => {
    setOpenRuleDialog(!openRuleDialog)
    setRules([])
  }

  return (
    <div style={{ textAlign: "center", fontSize: '2vw' }}>
      <h2>Rounds</h2>
      <Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid
            container
            style={{ justifyContent: "center", marginBottom: "3%" }}
          >
            <IconButton
              color="primary"
              aria-label="rules"
              component="label"
              onClick={handleOpenRule1}

            >
              <Info style={{ fontSize: '3vw' }} />
            </IconButton>
          </Grid>
          <Grid
            container
            specing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            style={{ justifyContent: "center" }}
          >
            {rounds.map((round, index) => (
              <Container key={round}>
                <Button
                  sx={{ ml: 2, mt: 2 }}
                  variant="contained"
                  onClick={() => handleSubjectClick(round)}
                  style={{ fontSize: '2.5vw', borderRadius: '1rem', padding: '0rem 2rem 0rem 2rem' }}
                >
                  {roundNames[round]}
                </Button>
              </Container>
            ))}
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid
            container
            style={{ justifyContent: "center", marginBottom: "3%" }}
          >
            <IconButton
              color="primary"
              aria-label="rules"
              component="label"
              onClick={handleOpenRule2}
            >
              <Info style={{ fontSize: '3vw' }} />
            </IconButton>
          </Grid>
          <Grid container rowSpacing={1} style={{ justifyContent: "center" }}>
          <Container>
              <Button
                style={{
                  fontSize: '2.5vw',
                  borderRadius: '1rem',
                  paddingLeft: '3rem',
                  paddingRight: '2rem'
                }}
                variant="contained"
                onClick={() => handleSubjectClick('round4')}
              >
                Buzzer
              </Button>
            </Container>
            <Container>
              <Button
                style={{
                  fontSize: '2.5vw',
                  borderRadius: '1rem',
                  paddingLeft: '3rem',
                  paddingRight: '2rem'
                }}
                variant="contained"
                onClick={() => handleSubjectClick('round5')}
              >
                Bonus
              </Button>
            </Container>
          </Grid>
        </Grid>
      </Box>
      <Dialog
        open={openRuleDialog}
        onClose={handleDialogClose}
        maxWidth="10">
        <DialogTitle style={{ fontSize: '2vw' }}>
                Rules
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography style={{ fontSize: '1.5vw' }}>
              {rules.map((rule, index) => {
                return (
                  <p>
                    {index + 1}. {rule}
                  </p>
                )
              })}
            </Typography>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Round;
