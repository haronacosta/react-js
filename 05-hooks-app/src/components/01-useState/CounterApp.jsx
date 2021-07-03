import React, { useState } from 'react';
import './counter.css';

const CounterApp = () => {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40,
  });

  const { counter1, counter2 } = state;

  const plusCounter1 = () => {
    setState({ ...state, counter1: counter1 + 1 });
  };

  return (
    <>
      <div className='container'>
        <h1> Counter 1: {counter1} </h1>
        <h1> Counter 2: {counter2} </h1>
        <hr />

        <button className='btn btn-primary' onClick={plusCounter1}>
          +1
        </button>
      </div>
    </>
  );
};

export default CounterApp;
