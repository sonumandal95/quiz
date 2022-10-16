import React, { useState, useEffect } from 'react';
import { FormLabel } from "@mui/material";

const Timer = (props) => {
  const [minutes, setMinutes] = useState(props.minutes || 0);
  const [seconds, setSeconds] = useState(props.seconds || 0);
  useEffect(() => {
    const interval = setInterval(() => {
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
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <>
      {minutes === 0 && seconds === 0 ? null : (
        <FormLabel
          style={{
            fontSize: '1.5vw',
            marginLeft: '10%',
            fontWeight: 'bolder',
            color: `${minutes === 0 && seconds < 20 ? 'red' : 'green'}`
          }}
        >
          {/* {minutes === 0 ? ` ${minutes} minute ` : ` ${minutes} minutes `}:
          {seconds < 10 ? ` 0${seconds}` : ` ${seconds}`}
          {seconds < 1 ? ' second ' : ' seconds '} */}
          Time: {seconds}
        </FormLabel>
      )}
    </>
  );
};

export default Timer;