import React, { useState } from 'react';
import './style.css';
import InputNumber from './Input';
import calculate from '../logic/calculate';

const CalculatorData = {
  total: null,
  next: null,
  operation: null,
};

const Calculator = () => {
  const [numbers, setNumbers] = useState(CalculatorData);

  const ClickEventHandlers = (event) => {
    setNumbers(calculate(numbers, event));
  };
  return (
    <>
      <p className="math-title">Let`s do some math!</p>
      <div className="container">
        <InputNumber className="numInput" value={numbers.next || numbers.operation || numbers.total || '0'} />
        <div className="rows-contanier">
          <div className="horizontal-rows">
            <button className="num-buttons" type="button" onClick={() => ClickEventHandlers('AC')}>
              AC
            </button>
            <button className="num-buttons" type="button" onClick={() => ClickEventHandlers('+/-')}>
              +/-
            </button>
            <button className="num-buttons" type="button" onClick={() => ClickEventHandlers('%')}>
              %
            </button>
            <button className="sign-btn" type="button" onClick={() => ClickEventHandlers('+')}>
              +
            </button>
          </div>
          <div className="horizontal-rows">
            <button className="num-buttons" type="button" onClick={() => ClickEventHandlers('7')}>
              7
            </button>
            <button className="num-buttons" type="button" onClick={() => ClickEventHandlers('8')}>
              8
            </button>
            <button className="num-buttons" type="button" onClick={() => ClickEventHandlers('9')}>
              9
            </button>
            <button className="sign-btn" type="button" onClick={() => ClickEventHandlers('x')}>
              x
            </button>
          </div>
          <div className="horizontal-rows">
            <button className="num-buttons" type="button" onClick={() => ClickEventHandlers('4')}>
              4
            </button>
            <button className="num-buttons" type="button" onClick={() => ClickEventHandlers('5')}>
              5
            </button>
            <button className="num-buttons" type="button" onClick={() => ClickEventHandlers('6')}>
              6
            </button>
            <button className="sign-btn" type="button" onClick={() => ClickEventHandlers('-')}>
              -
            </button>
          </div>
          <div className="horizontal-rows">
            <button className="num-buttons" type="button" onClick={() => ClickEventHandlers('1')}>
              1
            </button>
            <button className="num-buttons" type="button" onClick={() => ClickEventHandlers('2')}>
              2
            </button>
            <button className="num-buttons" type="button" onClick={() => ClickEventHandlers('3')}>
              3
            </button>
            <button className="sign-btn" type="button" onClick={() => ClickEventHandlers('+')}>
              +
            </button>
          </div>
          <div className="horizontal-rows">
            <button className="num-zero" type="button" onClick={() => ClickEventHandlers('0')}>
              0
            </button>
            <button className="num-buttons" type="button" onClick={() => ClickEventHandlers('.')}>
              .
            </button>
            <button className="sign-btn" type="button" onClick={() => ClickEventHandlers('=')}>
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
