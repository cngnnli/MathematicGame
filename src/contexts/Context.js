import { createContext, useState } from "react";

const Score = createContext();

export const ScoreProvider = ({ children }) => {

    const [ array, setArray ] = useState(Array(10).fill(''));
    const [ tf, setTf ] = useState(Array(10).fill(''));
    const [ points, setPoints ] = useState(0);
    const [ totalPoints, setTotalPoints ] = useState(0);
    const [ correctAnswers, setCorrectAnswers ] = useState(0);
    const [ correctAnswers2, setCorrectAnswers2 ] = useState(0);
    const [ generalCounter, setGeneralCounter ] = useState(0);

           
    const numbers1 = [
        Math.floor(Math.random()*9+1), 
        Math.floor(Math.random()*9+1),
        Math.floor(Math.random()*9+1),
        Math.floor(Math.random()*9+1),
        Math.floor(Math.random()*9+1),
        Math.floor(Math.random()*9+1),
        Math.floor(Math.random()*9+1),
        Math.floor(Math.random()*9+1),
        Math.floor(Math.random()*9+1),
        Math.floor(Math.random()*9+1)
    ];
    const numbers2 = [
        Math.floor(Math.random()*9+1), 
        Math.floor(Math.random()*9+1),
        Math.floor(Math.random()*9+1),
        Math.floor(Math.random()*9+1),
        Math.floor(Math.random()*9+1),
        Math.floor(Math.random()*9+1),
        Math.floor(Math.random()*9+1),
        Math.floor(Math.random()*9+1),
        Math.floor(Math.random()*9+1),
        Math.floor(Math.random()*9+1)
    ];


    const ord = [
        [0, 1, 2],
        [0, 2, 1],
        [1, 0, 2],
        [1, 2, 0],
        [2, 0, 1],
        [2, 1, 0]
    ]

    const shuffleArray = [
        [ord[Math.floor(Math.random()*6)]],
        [ord[Math.floor(Math.random()*6)]],
        [ord[Math.floor(Math.random()*6)]],
        [ord[Math.floor(Math.random()*6)]],
        [ord[Math.floor(Math.random()*6)]],
        [ord[Math.floor(Math.random()*6)]],
        [ord[Math.floor(Math.random()*6)]],
        [ord[Math.floor(Math.random()*6)]],
        [ord[Math.floor(Math.random()*6)]],
        [ord[Math.floor(Math.random()*6)]]
    ]

    const [ numberx, setNumberx ] = useState(numbers1);
    const [ numbery, setNumbery ] = useState(numbers2);
    const [ orderArray, setOrderArray ] = useState(shuffleArray);
       
    const values = {
        array,
        setArray,
        tf,
        setTf,
        points,
        setPoints,
        totalPoints,
        setTotalPoints,
        correctAnswers,
        setCorrectAnswers,
        generalCounter,
        setGeneralCounter,
        correctAnswers2,
        setCorrectAnswers2,
        numberx,
        setNumberx,
        numbery,
        setNumbery,
        orderArray,
        setOrderArray,
        numbers1,
        numbers2,
        shuffleArray
    }


    return <Score.Provider value={values}>{children}</Score.Provider>
}



export default Score;
