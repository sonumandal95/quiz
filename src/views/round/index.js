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
  const [rules, setRules] = useState("");
  const rounds = ["round1", "round2", "round3", "round4"];
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
    const data =
      "Components may have multiple widths defined, causing the layout to change at the defined breakpoint. Width values given to larger breakpoints override those given to smaller breakpoints. For example, xs={12} sm={6} sizes a component to occupy half of the viewport width (6 columns) when viewport width is 600 or more pixels. For smaller viewports, the component fills all 12 available columns.";
    setRules(data);
    setOpenRuleDialog(true);
  };

  const handleOpenRule2 = () => {
    const data =
      "Components may have multiple widths defined, causing the layout to change at the defined breakpoint. \nWidth values given to";
    setRules(data);
    setOpenRuleDialog(true);
  };

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
                  style={{ fontSize: '1.5vw', borderRadius: '1rem', padding: '0rem 2rem 0rem 2rem' }}
                >
                  Round {index + 1}
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
              <Button style={{ fontSize: '1.5vw', borderRadius: '1rem', paddingLeft: '3rem', paddingRight: '2rem' }} variant="contained">Round 5</Button>
            </Container>
          </Grid>
        </Grid>
      </Box>
      <Dialog
        open={openRuleDialog}
        onClose={() => setOpenRuleDialog(!openRuleDialog)}
        maxWidth="10">
        <DialogTitle style={{ fontSize: '2vw' }}>Rules</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography style={{ fontSize: '1.5vw' }}>{rules}</Typography>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Round;
