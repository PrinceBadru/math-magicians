import React from 'react';
import Answers from './Answers';

const Calculator = () => (
  <div className="container">
    <section className="section">
      <Answers value={0} />
      <div className="item-btn item1 norm-bg">AC</div>
      <div className="item-btn item2 norm-bg">+/-</div>
      <div className="item-btn item3 norm-bg">%</div>
      <div className="item-btn item4 gold-bg">/</div>
      <div className="item-btn item5 norm-bg">7</div>
      <div className="item-btn item6 norm-bg">8</div>
      <div className="item-btn item7 norm-bg">9</div>
      <div className="item-btn item8 gold-bg">x</div>
      <div className="item-btn item9 norm-bg">4</div>
      <div className="item-btn item10 norm-bg">5</div>
      <div className="item-btn item11 norm-bg">6</div>
      <div className="item-btn item12 gold-bg">+</div>
      <div className="item-btn item13 norm-bg">1</div>
      <div className="item-btn item14 norm-bg">2</div>
      <div className="item-btn item15 norm-bg">3</div>
      <div className="item-btn item16 gold-bg">-</div>
      <div className="item-btn item17 norm-bg">0</div>
      <div className="item-btn item18 gold-bg">=</div>
    </section>
  </div>
);

export default Calculator;
