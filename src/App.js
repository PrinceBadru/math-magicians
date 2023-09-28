import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/home';
import Quote from './Quote/quote';
import './last/nav.css';

export default function App() {
  return (
    <>
      <div className="App">
        <nav>
          <h1 className="title">Math Magicians</h1>
          <ul className="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Calculator">Calculator</Link>
            </li>
            <li>
              <Link to="/Quote">Quote</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/Quote" element={<Quote />} />
        </Routes>
      </div>
    </>
  );
}

