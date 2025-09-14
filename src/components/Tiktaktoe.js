import React, { useState } from "react";



function Tiktaktoe (){
    let [data, setdata] = useState(Array(9).fill(""));
    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);
    let [title, settitle] = useState("Tic Tac Toe Game using")
    let [rea, setreact] = useState("React")
    let [win, setwin] = useState("")
    const toggle = (num) => {
        if(lock || data[num] !== ""){
            return;
        }
        if (lock) {
            return ;
        }
        const newdata = [...data];

        if(count % 2 === 0)
            {
                
        newdata[num]= "x";
        }

        else{
        newdata[num] = 'o'
        }
        setdata(newdata)
        setCount(count + 1)
        checkwin(newdata);
    }

    const checkwin = (newData) => { 

    if (newData[0] === newData[1] && newData[1] === newData[2] && newData[0] !== "") {
        won(newData[0]);
    } else if (newData[3] === newData[4] && newData[4] === newData[5] && newData[3] !== "") {
        won(newData[3]);
    } else if (newData[6] === newData[7] && newData[7] === newData[8] && newData[6] !== "") {
        won(newData[6]);
    }
    // Vertical
    else if (newData[0] === newData[3] && newData[3] === newData[6] && newData[0] !== "") {
        won(newData[0]);
    } else if (newData[1] === newData[4] && newData[4] === newData[7] && newData[1] !== "") {
        won(newData[1]);
    } else if (newData[2] === newData[5] && newData[5] === newData[8] && newData[2] !== "") {
        won(newData[2]);
    }
    // Diagonal
    else if (newData[0] === newData[4] && newData[4] === newData[8] && newData[0] !== "") {
        won(newData[0]);
    } else if (newData[2] === newData[4] && newData[4] === newData[6] && newData[2] !== "") {
        won(newData[2]);
    }
};

    const won = (winner) => {
        setLock(true)
        if(winner === "x"){
            settitle("Conguratulations! ");
            setreact("x")
            setwin("wins")
        }else{
            settitle("Conguratulations! ")
            setreact("o")
            setwin("wins")
        }
    }

    const reset = () => {
        settitle("Tic Tac Toe Game using")
        setreact("React")
        setwin("")
        setCount(0)
        setdata(Array(9).fill(""))
        setLock (false)
    }

    const renderbox = (value) => {
        if (value === 'x' ) {
            return <h1 className="popx">X</h1>
        }else if(value === 'o' ) {
            return <h1 className="popo">O</h1>
        }
        return null
    }

    return(
        <div className="container">
            <h1 className="title">
                {title} <span>{rea}</span> {win}
            </h1>
            <div className="board">
                <div className="row1">
        <div className="boxes" onClick={() => toggle(0)}> {renderbox(data[0])}</div>
        <div className="boxes" onClick={() => toggle(1)}> {renderbox(data[1])}</div>
        <div className="boxes" onClick={() => toggle(2)}> {renderbox(data[2])}</div>
        </div>

        <div className="row2">
        <div className="boxes" onClick={() => toggle(3)}> {renderbox(data[3])}</div>
        <div className="boxes" onClick={() => toggle(4)}> {renderbox(data[4])}</div>
        <div className="boxes" onClick={() => toggle(5)}> {renderbox(data[5])}</div>
        </div>

        <div className="row3">
        <div className="boxes" onClick={() => toggle(6)}> {renderbox(data[6])}</div>
        <div className="boxes" onClick={() => toggle(7)}> {renderbox(data[7])}</div>
        <div className="boxes" onClick={() => toggle(8)}> {renderbox(data[8])}</div>
        </div>
            </div>

            <button className="reset" onClick={reset}>
                Reset
            </button>
        </div>
    )
}

export default Tiktaktoe