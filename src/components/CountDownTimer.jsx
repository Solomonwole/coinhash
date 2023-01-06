import React, { useState, useEffect } from "react";

const CountdownTimer = ({ minutes, seconds }) => {
  const [timeLeft, setTimeLeft] = useState({ minutes, seconds });

  useEffect(() => {
    setTimeout(() => {
      if (timeLeft.seconds > 0) {
        setTimeLeft(prevTime => ({
          minutes: prevTime.minutes,
          seconds: prevTime.seconds - 1
        }));
      } else if (timeLeft.minutes > 0) {
        setTimeLeft(prevTime => ({
          minutes: prevTime.minutes - 1,
          seconds: 59
        }));
      }
    }, 1000);
  });

  return (
    <div>
     <b> Time left: {timeLeft.minutes}:{timeLeft.seconds}</b>
    </div>
  );
};

export default CountdownTimer;