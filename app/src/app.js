import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from './app.module.css';
import Home from './home';
import Surveys from './survey/list';

export default function App() {
  return (
    <Router>
      <div class={styles.app}>
        <header class={styles.header}>
          <h1 class={styles.title}>IWD</h1>
          <nav class={styles.mainNavigation}>
            <Link class={styles.link} to="/">Home</Link>
            <Link class={styles.link} to="/surveys/">Surveys</Link>
          </nav>
        </header>

        <Route path="/" exact component={Home} />
        <Route path="/surveys/" component={Surveys} />
      </div>
    </Router>
  );
}
