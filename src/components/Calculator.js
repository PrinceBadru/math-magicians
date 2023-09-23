import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

const Calculator = ({ onClick, state }) => (
  <div className="container">
    <section className="section">
      <div className="results gray-bg flex-container">
        <div className="flexed-items">{state.total || null}</div>
        <div className="flexed-items">{state.operation}</div>
        <div className="flexed-items">{state.next}</div>
      </div>

      <button
        type="button"
        className="items item1 norm-bg"
        onClick={() => onClick('AC')}
      >
        AC
      </button>
      <button
        type="button"
        className="items item2 norm-bg"
        onClick={() => onClick('+/-')}
      >
        +/-
      </button>
      <button
        type="button"
        className="items item3 norm-bg"
        onClick={() => onClick('%')}
      >
        %
      </button>
      <button
        type="button"
        className="items item4 golden-bg"
        onClick={() => onClick('/')}
      >
        /
      </button>
      <button
        type="button"
        className="items item5 norm-bg"
        onClick={() => onClick('7')}
      >
        7
      </button>
      <button
        type="button"
        className="items item6 norm-bg"
        onClick={() => onClick('8')}
      >
        8
      </button>
      <button
        type="button"
        className="items item7 norm-bg"
        onClick={() => onClick('9')}
      >
        9
      </button>
      <button
        type="button"
        className="items item8 golden-bg"
        onClick={() => onClick('x')}
      >
        x
      </button>
      <button
        type="button"
        className="items item9 norm-bg"
        onClick={() => onClick('4')}
      >
        4
      </button>
      <button
        type="button"
        className="items item10 norm-bg"
        onClick={() => onClick('5')}
      >
        5
      </button>
      <button
        type="button"
        className="items item11 norm-bg"
        onClick={() => onClick('6')}
      >
        6
      </button>
      <button
        type="button"
        className="items item12 golden-bg"
        onClick={() => onClick('+')}
      >
        +
      </button>
      <button
        type="button"
        className="items item13 norm-bg"
        onClick={() => onClick('1')}
      >
        1
      </button>
      <button
        type="button"
        className="items item14 norm-bg"
        onClick={() => onClick('2')}
      >
        2
      </button>
      <button
        type="button"
        className="items item15 norm-bg"
        onClick={() => onClick('3')}
      >
        3
      </button>
      <button
        type="button"
        className="items item16 golden-bg"
        onClick={() => onClick('-')}
      >
        -
      </button>
      <button
        type="button"
        className="items item17 norm-bg"
        onClick={() => onClick('0')}
      >
        0
      </button>
      <button
        type="button"
        className="items item18 golden-bg"
        onClick={() => onClick('=')}
      >
        =
      </button>
    </section>
  </div>
);

export default Calculator;

Calculator.propTypes = {
  onClick: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired,
};
