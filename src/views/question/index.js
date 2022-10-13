import React from 'react'
import { useLocation } from "react-router-dom";


const Question = () => {
  const location = useLocation();
  const question = location.state?.question
  return (
    <div style={{ 'textAlign': 'center' }}>
      <h1>This is Question page</h1>
      <p>{question.question}</p>
    </div>
  )
};

export default Question;
