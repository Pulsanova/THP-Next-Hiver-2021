import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Config from 'config';
import BlocNote from 'pages/BlocNote';

const storedNotes = JSON.parse(localStorage.getItem(Config.STORAGE_KEY) || '[]');

const App = () => (
    <BlocNote storedNotes={storedNotes} />
);

ReactDOM.render(<App />, document.getElementById('root'));
