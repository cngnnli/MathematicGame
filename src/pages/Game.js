import React, { useState, useContext } from "react";
import '../css/App.css';
import { useNavigate } from "react-router-dom";
import Score from "../contexts/Context";

function Game() {
  const { 
    array, setArray, 
    tf, setTf,
    points, setPoints,
    generalCounter, setGeneralCounter,
    correctAnswers, setCorrectAnswers,
    correctAnswers2, setCorrectAnswers2,
    numberx, setNumberx,
    numbery, setNumbery,
    orderArray, setOrderArray,
    numbers1,
    numbers2,
    shuffleArray
  } = useContext(Score);

  const [ first, setFirst ] = useState("center choice choice1");
  const [ second, setSecond ] = useState("center choice choice2");
  const [ third, setThird ] = useState("center choice choice3");
  const [ color1, setColor1 ] = useState("white");
  const [ color2, setColor2 ] = useState("white");
  const [ color3, setColor3 ] = useState("white");
  const [ counter, setCounter ] = useState(0);
  const [ dis, setDis ] = useState("game");

  const Navigate = useNavigate();

  function delay(ms) {
    return new Promise((resolve) => {
       setTimeout(resolve, ms);
    })
  }   

  async function handleClick1 () {
    let squares = [...array];
    let squares2 = [...tf];
    squares2[counter] = (list[counter].ans[0] == document.getElementById('id1').innerHTML);
    setTf(squares2);
    squares[counter] = list[counter].correct;
    setArray(squares);
    if (squares2[counter] == true && counter <= 9){
      setFirst("center choice choice1 correct");
      document.body.style = "background-color: green;";
      document.getElementById('id1').style = "color: black;";
      setColor1("black");
      setDis("game neg");
      await delay(3000);
      setFirst("center choice choice1");
      document.body.style = "background-color: #2D2D2D;";
      document.getElementById('id1').style = "color: white;";
      setColor1("white");
      setDis("game");
      setPoints(list[counter].point + points);
      setCorrectAnswers(correctAnswers + 1);
      setCorrectAnswers2(correctAnswers2 + 1);
      if (counter == 9){
        setNumberx(numbers1);
        setNumbery(numbers2);
        setOrderArray(shuffleArray);        
        Navigate("/board");
      }
    } else if (squares2[counter] == false && counter <= 9){
      setFirst("center choice choice1 wrong");
      document.body.style = "background-color: red;";
      document.getElementById('id1').style = "color: black;";
      setColor1("black");
      setDis("game neg");
      if (list[counter].ans[0] == document.getElementById('id2').innerHTML){
        setColor2("green");
      } else if (list[counter].ans[0] == document.getElementById('id3').innerHTML){
        setColor3("green");
      }
      await delay(3000);
      setFirst("center choice choice1");
      document.body.style = "background-color: #2D2D2D;";
      document.getElementById('id1').style = "color: white;";
      setColor1("white");setColor2("white");setColor3("white");
      setDis("game");
      if (counter == 9){
        setNumberx(numbers1);
        setNumbery(numbers2);
        setOrderArray(shuffleArray);
        Navigate("/board");
      }
    }
    if (counter <= 9){
      setCounter(counter + 1);
      setGeneralCounter(generalCounter + 1);
    }
  }
  async function handleClick2 () {
    let squares = [...array];
    let squares2 = [...tf];
    squares2[counter] = (list[counter].ans[0] == document.getElementById('id2').innerHTML);
    setTf(squares2);
    squares[counter] = list[counter].correct;
    setArray(squares);
    if (squares2[counter] == true && counter <= 9){
      setSecond("center choice choice2 correct");
      document.body.style = "background-color: green;";
      document.getElementById('id2').style = "color: black;";
      setColor2("black");
      setDis("game neg");
      await delay(3000);
      setSecond("center choice choice2");
      document.body.style = "background-color: #2D2D2D;";
      document.getElementById('id2').style = "color: white;";
      setColor2("white");
      setDis("game");
      setPoints(list[counter].point + points);
      setCorrectAnswers(correctAnswers + 1);
      setCorrectAnswers2(correctAnswers2 + 1);
      if (counter == 9){
        setNumberx(numbers1);
        setNumbery(numbers2);
        setOrderArray(shuffleArray);
        Navigate("/board");
      }
    } else if (squares2[counter] == false && counter <= 9){
      setSecond("center choice choice2 wrong");
      document.body.style = "background-color: red;";
      document.getElementById('id2').style = "color: black;";
      setColor2("black");
      setDis("game neg");
      if (list[counter].ans[0] == document.getElementById('id1').innerHTML){
        setColor1("green");
      } else if (list[counter].ans[0] == document.getElementById('id3').innerHTML){
        setColor3("green");
      }
      await delay(3000);
      setSecond("center choice choice2");
      document.body.style = "background-color: #2D2D2D;";
      document.getElementById('id2').style = "color: white;";
      setColor1("white");setColor2("white");setColor3("white");
      setDis("game");
      if (counter == 9){
        setNumberx(numbers1);
        setNumbery(numbers2);
        setOrderArray(shuffleArray);
        Navigate("/board");
      }
    }
    if (counter <= 9){
      setCounter(counter + 1);
      setGeneralCounter(generalCounter + 1);
    }
  }
  async function handleClick3 () {
    let squares = [...array];
    let squares2 = [...tf];
    squares2[counter] = (list[counter].ans[0] == document.getElementById('id3').innerHTML);
    setTf(squares2);
    squares[counter] = list[counter].correct;
    setArray(squares);
    if (squares2[counter] == true && counter <= 9){
      setThird("center choice choice3 correct");
      document.body.style = "background-color: green;";
      document.getElementById('id3').style = "color: black;";
      setColor3("black");
      setDis("game neg");
      await delay(3000);
      setThird("center choice choice3");
      document.body.style = "background-color: #2D2D2D;";
      document.getElementById('id3').style = "color: white;";
      setColor3("white");
      setDis("game");
      setPoints(list[counter].point + points);
      setCorrectAnswers(correctAnswers + 1);
      setCorrectAnswers2(correctAnswers2 + 1);
      if (counter == 9){
        setNumberx(numbers1);
        setNumbery(numbers2);
        setOrderArray(shuffleArray);
        Navigate("/board");
      }
    } else if (squares2[counter] == false && counter <= 9){
      setThird("center choice choice3 wrong");
      document.body.style = "background-color: red;";
      document.getElementById('id3').style = "color: black;";
      setColor3("black");
      setDis("game neg");
      if (list[counter].ans[0] == document.getElementById('id1').innerHTML){
        setColor1("green");
      } else if (list[counter].ans[0] == document.getElementById('id2').innerHTML){
        setColor2("green");
      }
      await delay(3000);
      setThird("center choice choice3");
      document.body.style = "background-color: #2D2D2D;";
      document.getElementById('id3').style = "color: white;";
      setColor1("white");setColor2("white");setColor3("white");
      setDis("game");
      if (counter == 9){
        setNumberx(numbers1);
        setNumbery(numbers2);
        setOrderArray(shuffleArray);
        Navigate("/board");
      }
    }
    if (counter <= 9){
      setCounter(counter + 1);
      setGeneralCounter(generalCounter + 1);
    }
  }

  const list = [{
    question: `${numberx[0]} x ${numbery[0]}`,
    ans: [numberx[0] * numbery[0], (numberx[0] - 1) * numbery[0], numberx[0] * (numbery[0] + 1)],
    correct: `${numberx[0]} x ${numbery[0]} = ${numberx[0]*numbery[0]}`,
    point: Math.ceil(Math.sqrt(numberx[0] * numbery[0]))
  },
  {
    question: `${numberx[1]} x ${numbery[1]}`,
    ans: [numberx[1] * numbery[1], (numberx[1] - 1) * numbery[1], numberx[1] * (numbery[1] + 1)],
    correct: `${numberx[1]} x ${numbery[1]} = ${numberx[1]*numbery[1]}`,
    point: Math.ceil(Math.sqrt(numberx[1] * numbery[1]))
  },
  {
    question: `${numberx[2]} x ${numbery[2]}`,
    ans: [numberx[2] * numbery[2], (numberx[2] - 1) * numbery[2], numberx[2] * (numbery[2] + 1)],
    correct: `${numberx[2]} x ${numbery[2]} = ${numberx[2]*numbery[2]}`,
    point: Math.ceil(Math.sqrt(numberx[2] * numbery[2]))
  },
  {
    question: `${numberx[3]} x ${numbery[3]}`,
    ans: [numberx[3] * numbery[3], (numberx[3] - 1) * numbery[3], numberx[3] * (numbery[3] + 1)],
    correct: `${numberx[3]} x ${numbery[3]} = ${numberx[3]*numbery[3]}`,
    point: Math.ceil(Math.sqrt(numberx[3] * numbery[3]))
  },
  {
    question: `${numberx[4]} x ${numbery[4]}`,
    ans: [numberx[4] * numbery[4], (numberx[4] - 1) * numbery[4], numberx[4] * (numbery[4] + 1)],
    correct: `${numberx[4]} x ${numbery[4]} = ${numberx[4]*numbery[4]}`,
    point: Math.ceil(Math.sqrt(numberx[4] * numbery[4]))
  },
  {
    question: `${numberx[5]} x ${numbery[5]}`,
    ans: [numberx[5] * numbery[5], (numberx[5] - 1) * numbery[5], numberx[5] * (numbery[5] + 1)],
    correct: `${numberx[5]} x ${numbery[5]} = ${numberx[5]*numbery[5]}`,
    point: Math.ceil(Math.sqrt(numberx[5] * numbery[5]))
  },
  {
    question: `${numberx[6]} x ${numbery[6]}`,
    ans: [numberx[6] * numbery[6], (numberx[6] - 1) * numbery[6], numberx[6] * (numbery[6] + 1)],
    correct: `${numberx[6]} x ${numbery[6]} = ${numberx[6]*numbery[6]}`,
    point: Math.ceil(Math.sqrt(numberx[6] * numbery[6]))
  },
  {
    question: `${numberx[7]} x ${numbery[7]}`,
    ans: [numberx[7] * numbery[7], (numberx[7] - 1) * numbery[7], numberx[7] * (numbery[7] + 1)],
    correct: `${numberx[7]} x ${numbery[7]} = ${numberx[7]*numbery[7]}`,
    point: Math.ceil(Math.sqrt(numberx[7] * numbery[7]))
  },
  {
    question: `${numberx[8]} x ${numbery[8]}`,
    ans: [numberx[8] * numbery[8], (numberx[8] - 1) * numbery[8], numberx[8] * (numbery[8] + 1)],
    correct: `${numberx[8]} x ${numbery[8]} = ${numberx[8]*numbery[8]}`,
    point: Math.ceil(Math.sqrt(numberx[8] * numbery[8]))
  },
  {
    question: `${numberx[9]} x ${numbery[9]}`,
    ans: [numberx[9] * numbery[9], (numberx[9] - 1) * numbery[9], numberx[9] * (numbery[9] + 1)],
    correct: `${numberx[9]} x ${numbery[9]} = ${numberx[9]*numbery[9]}`,
    point: Math.ceil(Math.sqrt(numberx[9] * numbery[9]))
  }]

  return (
    <div className={dis}>
        <div className="row scorePanel">
          <div className="row scores">
            <span>Score: {points}</span>
            <span>Tour: {Math.floor(generalCounter / 10) + 1}</span>
            <span>Questions: {correctAnswers2}/{counter}</span>
          </div>
        </div>
        <div className="question">
          <svg width="651" height="651" viewBox="0 0 971 971" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="white" d="M674.035 192.747C667.233 177.254 700.437 173.697 714.641 174.7C723.163 184.225 687.069 177.207 686.066 187.233C684.713 200.769 718.15 195.254 719.153 200.267C720.156 205.28 683.058 213.301 674.035 192.747Z"/>
            <path fill="white" d="M668.019 127.075C671.628 123.466 671.862 109.195 671.528 102.511C674.369 100.338 680.351 97.297 681.554 102.511C683.058 109.028 677.042 130.584 674.536 131.587C672.029 132.59 663.507 131.587 668.019 127.075Z"/>
            <path fill="white" d="M735.853 128.102C739.014 124.093 737.572 109.894 736.455 103.295C739.021 100.804 744.605 97.0817 746.412 102.118C748.671 108.414 745.227 130.527 742.855 131.817C740.483 133.107 731.902 133.112 735.853 128.102Z"/>
            <path fill="white" d="M438.136 225.714C439.89 230.226 468.716 205.661 478.241 253.787L457.687 245.766C457.186 242.09 455.272 243.846 451.671 237.244C448.663 231.73 441.645 234.57 442.146 237.244L448.162 257.798C445.823 258.968 440.342 261.407 437.133 261.808C433.123 262.31 434.316 243.26 430.616 247.772C414.173 267.824 444.987 284.535 465.708 289.882C475.734 294.06 495.286 300.811 467.212 298.404C432.12 295.397 421.091 283.866 412.067 271.835C404.848 262.21 419.253 241.422 427.608 234.737C420.924 216.189 407.455 177.989 407.054 173.577C406.653 169.165 415.911 169.734 420.59 170.569C427.608 198.643 431.735 209.254 438.136 225.714Z"/>
            <path fill="white" d="M464.204 290.885C459.989 251.8 454.679 236.83 446.658 231.228L478.241 253.286C478.241 301.914 501.302 396.662 551.433 427.243C586.326 448.527 655.874 350.04 697.817 301.412C714.249 282.362 699.278 317.454 697.817 319.46C593.042 463.337 544.415 445.29 520.352 421.227C512.331 413.206 469.719 342.019 464.204 290.885Z"/>
            <path fill="white" fillRule="evenodd" clipRule="evenodd" d="M702.83 301.412C723.05 302.248 763.177 316.666 793.657 367.198C830.147 427.695 836.841 426.877 845.102 425.868C845.466 425.823 845.833 425.779 846.207 425.739C868.264 423.373 913.884 329.987 913.884 329.987C897.675 317.622 871.874 287.877 900.349 267.824C928.823 247.772 947.639 262.811 953.488 272.837C961.342 284.201 969.53 307.929 929.926 327.982C926.699 333.536 923.263 339.833 919.612 346.524C898.876 384.523 871.188 435.264 835.178 435.264C823.516 435.264 813.999 419.185 801.998 398.909C793.362 384.32 783.44 367.558 770.508 353.048C749.954 329.987 713.358 306.927 702.83 310.436C694.408 313.243 699.321 305.59 702.83 301.412ZM923.91 321.465C937.754 321.465 948.976 303.912 948.976 293.391C948.976 282.87 941.764 268.325 927.921 268.325C914.077 268.325 898.845 282.87 898.845 293.391C898.845 303.912 910.067 321.465 923.91 321.465Z"/>
            <path fill="white" d="M709.849 447.295C709.849 401.174 693.138 300.076 684.783 255.291H696.313C731.907 395.158 720.376 569.616 720.376 575.632C720.376 583.152 715.865 587.162 709.849 581.648C703.833 576.133 709.849 504.946 709.849 447.295Z"/>
            <path fill="white" d="M576.499 185.107C521.978 76.691 634.317 28.0284 695.812 29.6995C701.828 26.4911 691.969 24.6863 686.287 24.185C637.994 20.8429 552.436 52.7599 552.436 129.963C552.436 240.753 660.219 255.793 685.285 258.299C731.405 262.911 840.191 238.748 827.658 134.474C815.125 30.2007 711.353 15.2577 678.266 17.1666C657.411 18.3697 662.224 22.3468 667.237 24.185C776.524 13.6574 817.13 103.393 817.13 149.012C817.13 274.843 620.113 271.835 576.499 185.107Z"/>
            <path fill="white" d="M866.112 918.209C745.295 742.748 791.917 730.717 716.219 570.797C716.218 551.246 707.527 578.614 716.219 600.375C785.902 774.832 732.762 743.249 857.088 922.72L866.112 918.209Z"/>
            <path fill="white" d="M660.218 732.042C672.776 674.391 712.857 563.099 712.857 563.099L719.374 587.162C719.374 587.162 683.654 693.942 671.247 748.586C658.841 803.229 693.305 925.55 695.812 935.075C698.318 944.6 688.292 947.608 682.778 940.088C677.263 932.568 614.599 865.893 598.055 903.993C581.512 942.093 671.247 947.608 671.247 947.608C671.247 947.608 675.759 947.608 677.263 951.117C679.674 956.742 657.211 963.65 607.079 943.096C556.948 922.542 594.045 874.416 628.636 884.442C663.226 894.468 677.263 917.028 677.263 917.028C677.263 917.028 647.661 789.693 660.218 732.042Z"/>
            <path fill="white" d="M794.07 884.943C810.914 888.152 838.185 899.983 849.716 905.497L857.737 916.526C849.716 923.043 807.104 891.461 782.038 890.458C756.972 889.455 744.941 935.966 774.518 949.112C788.348 955.258 824.483 934.407 847.71 921.539C853.392 919.033 863.351 915.524 857.737 921.539C852.122 927.555 803.929 946.438 780.534 955.128C770.007 956.13 748.149 952.12 744.941 928.057C740.93 897.978 773.014 880.933 794.07 884.943Z"/>
            <path fill="white" d="M10.0614 125.315C17.31 118.839 21.2482 119.048 28.099 124.719L41.5407 531.565C34.1372 534.871 30.1845 535.03 23.5031 532.161L10.0614 125.315Z"/>
            <path fill="white" d="M18.4336 120.357L453.074 122.178V128.194H18.9346C8.40729 130.199 5.90073 121.176 18.4336 120.357Z"/>
            <path fill="white" d="M32.3834 540.275L591.938 465.579V453.705L32.8846 524.806C22.3551 520.847 19.848 538.66 32.3834 540.275Z"/>
            <path fill="white" d="M228.649 93.0642C227.81 97.5575 234.129 94.0003 237.394 91.66L254.884 29.1746C260.364 50.0031 271.534 91.9409 272.373 93.0642C273.423 94.4684 278.669 93.0642 281.468 91.66C284.266 90.2559 262.229 16.5372 259.781 13.0267C257.332 9.51632 254.184 11.2715 251.386 13.0267C248.587 14.7819 229.699 87.4475 228.649 93.0642Z"/>
            <rect fill="white" x="184.06" y="540.695" width="11.7079" height="388.018" transform="rotate(4.94487 184.06 540.695)"/>
            <rect fill="white" x="367.85" y="519.978" width="11.7079" height="388.018" transform="rotate(-13.6512 367.85 519.978)"/>
          </svg>
          <span>{list[counter].question}</span>
        </div>
        <div className="row choicePanel">
          <div className="row choices">
            <div onClick={() => handleClick1()} className={first}>
              <svg id="span1" width="145" height="127" viewBox="0 0 203 178" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill={color1} d="M17.6845 123.733C-22.3844 43.9272 60.1765 8.10654 105.37 9.33661C109.791 6.97489 102.546 5.64641 98.3701 5.27739C62.8783 2.81726 0 26.3115 0 83.1405C0 164.694 79.2118 175.764 97.6332 177.61C131.529 181.005 211.477 163.218 202.267 86.4617C193.056 9.70561 116.791 -1.29401 92.4752 0.111112C77.1487 0.996765 80.6856 3.92431 84.3698 5.27739C164.687 -2.47203 194.53 63.5825 194.53 97.1632C194.53 189.787 49.7377 187.573 17.6845 123.733Z"/>
              </svg>
              <span id="id1">{list[counter].ans[orderArray[counter][0][0]]}</span>
            </div>
            <div onClick={() => handleClick2()} className={second}>
              <svg width="145" height="127" viewBox="0 0 203 178" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill={color2} d="M17.6845 123.733C-22.3844 43.9272 60.1765 8.10654 105.37 9.33661C109.791 6.97489 102.546 5.64641 98.3701 5.27739C62.8783 2.81726 0 26.3115 0 83.1405C0 164.694 79.2118 175.764 97.6332 177.61C131.529 181.005 211.477 163.218 202.267 86.4617C193.056 9.70561 116.791 -1.29401 92.4752 0.111112C77.1487 0.996765 80.6856 3.92431 84.3698 5.27739C164.687 -2.47203 194.53 63.5825 194.53 97.1632C194.53 189.787 49.7377 187.573 17.6845 123.733Z"/>
              </svg>
              <span id="id2">{list[counter].ans[orderArray[counter][0][1]]}</span>
            </div>
            <div onClick={() => handleClick3()} className={third}>
              <svg width="145" height="127" viewBox="0 0 203 178" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill={color3} d="M17.6845 123.733C-22.3844 43.9272 60.1765 8.10654 105.37 9.33661C109.791 6.97489 102.546 5.64641 98.3701 5.27739C62.8783 2.81726 0 26.3115 0 83.1405C0 164.694 79.2118 175.764 97.6332 177.61C131.529 181.005 211.477 163.218 202.267 86.4617C193.056 9.70561 116.791 -1.29401 92.4752 0.111112C77.1487 0.996765 80.6856 3.92431 84.3698 5.27739C164.687 -2.47203 194.53 63.5825 194.53 97.1632C194.53 189.787 49.7377 187.573 17.6845 123.733Z"/>
              </svg>
              <span id="id3">{list[counter].ans[orderArray[counter][0][2]]}</span>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Game;
