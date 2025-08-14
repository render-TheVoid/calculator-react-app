import React from 'react';
import { evaluate } from 'mathjs';
import { useState } from 'react';

const App = () => {

  const [input, setInput] = useState("");
  const [head, setHead] = useState("void - Calculator App");

  const errorMsgs = [
    "nice try diddy.",
    "math says no.",
    "did you even try?",
    "blud, are you even trying?",
    "mate, i can't even.",
  ];

  const errorInputMsgs = [
    "use a number next time",
    "sybau",
    "even math is offended",
    "wtf",
    "what",
    "lmao"
  ];

  const calculate = () => {
    try {
      setInput(evaluate(input).toString());
    } catch {
      const randomNumOne = Math.floor(Math.random() * errorInputMsgs.length);
      setInput(errorInputMsgs[randomNumOne]);
      const randomNumTwo = Math.floor(Math.random() * errorMsgs.length);
      setHead(errorMsgs[randomNumTwo]);
    }
  };


  const appendInput = (value) => {
    setInput(input + value);
    setHead("void - Calculator App")
  };

  return (
    <>
      <h1>{head}</h1>
      <div className='container'>
        <input type="text" value={input} />
        <button className='row-two' onClick={() => setInput("")}>AC</button>
        <button onClick={() => setInput(input.slice(0, -1))}>DE</button>
        <button onClick={() => appendInput("/")}>/</button>
        <button onClick={() => appendInput("7")}>7</button>
        <button onClick={() => appendInput("8")}>8</button>
        <button onClick={() => appendInput("9")}>9</button>
        <button onClick={() => appendInput("*")}>x</button>
        <button onClick={() => appendInput("4")}>4</button>
        <button onClick={() => appendInput("5")}>5</button>
        <button onClick={() => appendInput("6")}>6</button>
        <button onClick={() => appendInput("-")}>-</button>
        <button onClick={() => appendInput("1")}>1</button>
        <button onClick={() => appendInput("2")}>2</button>
        <button onClick={() => appendInput("3")}>3</button>
        <button onClick={() => appendInput("+")}>+</button>
        <button onClick={() => appendInput(".")}>.</button>
        <button onClick={() => appendInput("0")}>0</button>
        <button onClick={() => appendInput("00")}>00</button>
        <button onClick={calculate}>=</button>
      </div>
    </>
  );
};

export default App