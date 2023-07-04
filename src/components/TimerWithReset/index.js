import React, { useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import { FormLabel } from "@mui/material";

const TimerWithReset = forwardRef((props, ref) => {
  const [minutes, setMinutes] = useState(props.minutes || 0);
  const [seconds, setSeconds] = useState(props.seconds || 0);
  let interval
  const startTimer = () => {
    interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
          props.onTimeOut();
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
  }

  const stopTimer = () => {
    clearInterval(interval);
  }

  useImperativeHandle(ref, () => ({
    resetTimer() {
      console.log("reseting timer");
      stopTimer()
      setSeconds(props.seconds)
      startTimer()
    },
    forceStopTimer() {
      console.log("Stoping timer");
      stopTimer()
      setSeconds(0)
    }
  }));

  useEffect(() => {
    startTimer();
    return () => {
      stopTimer();
    };
  });

  return (
    <>
      {minutes === 0 && seconds === 0 ? null : (
        <FormLabel
          style={{
            fontSize: '3vw',
            marginLeft: '10%',
            fontWeight: 'bolder',
            color: `${minutes === 0 && seconds < 20 ? 'red' : 'green'}`
          }}
        >
          Time: {seconds}
        </FormLabel>
      )}
    </>
  );
});

export default TimerWithReset;