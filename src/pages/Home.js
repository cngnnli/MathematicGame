import React, { useContext } from "react";
import '../css/App.css';
import { Link } from "react-router-dom";
import Score from "../contexts/Context";

function Home() {
  const { totalPoints} = useContext(Score);
  const { generalCounter } = useContext(Score);
  const { correctAnswers } = useContext(Score);  


  return (
    <div className="center home">
        <div className="center title">
          <span>Mathematics Game</span>
          <svg width="510" height="10" viewBox="0 0 640 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FF0000" d="M639.998 1.72994C641.22 -1.50429 12.5197 0.574858 5.18769 1.72994C-2.14435 2.88503 -1.30127 5.72697 5.18769 9.1225C11.6766 12.518 619.626 4.96418 619.626 4.96418C619.626 4.96418 638.776 4.96418 639.998 1.72994Z"/>
          </svg>
        </div>
        <div className="center scoreTable">
          <span>Total Point: {totalPoints}</span>
          <span>Total Questions: {generalCounter}</span>
          <span>Total Correct Answers: {correctAnswers}</span>
        </div>
        <div className="center button">
          <svg width="347" height="108" viewBox="0 0 447 139" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="white" d="M28.965 97.6124C-59.2656 35.2924 132.507 6.33039 232.022 7.29094C241.757 5.44668 225.802 4.40928 216.608 4.1211C138.456 2.19999 0 20.5466 0 64.9243C0 128.609 174.422 137.254 214.986 138.695C289.622 141.346 465.667 127.457 445.385 67.5178C425.103 7.5791 257.171 -1.01049 203.628 0.0867675C169.879 0.778373 177.667 3.06449 185.78 4.1211C362.636 -1.93041 440.737 49.1335 440.737 75.3567C440.737 147.687 99.5451 147.465 28.965 97.6124Z"/>
          </svg>
          <Link to="/game">Start</Link>
        </div>
    </div>
  );
}

export default Home;
