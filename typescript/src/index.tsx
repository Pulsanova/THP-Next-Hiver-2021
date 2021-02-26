import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from 'components/Hello';
import Logo from 'components/Logo';

const App = (): JSX.Element => (
    <div className="App">
        <Hello />
        <Logo />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
