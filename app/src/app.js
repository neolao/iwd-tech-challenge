import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './app.css';
import Home from './home';
import Surveys from './survey/list';

export default function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1 className="title">IWD</h1>
          <nav className="mainNavigation">
            <Link className="link" to="/">Home</Link>
            <Link to="/surveys/">Surveys</Link>
          </nav>
        </header>

        <Route path="/" exact component={Home} />
        <Route path="/surveys/" component={Surveys} />
      </div>
    </Router>
  );
}
