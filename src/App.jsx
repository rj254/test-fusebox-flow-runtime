import * as React from 'react';
import { Component } from 'react';
import './App.css';
import logo from './logo.svg';

type User = {
    username: string,
    password: string,
};

const testUser: User = {
    username: 'fake',
    pass: 'fake2',
};

const App = (): React$Element<*> =>
    <div className="App">
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>
                Welcome to React!: {`${JSON.stringify(testUser)}`}
            </h2>
        </div>
        <p className="App-intro">
            To get started, edit
            <code>src/App.js</code>
            and save to reload.
        </p>
    </div>;

export default App;
