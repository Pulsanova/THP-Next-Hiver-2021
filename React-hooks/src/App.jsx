import './App.scss';
import { StrictMode } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Stations from 'pages/Stations';

const App = () => (
    <StrictMode>
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <main className="App__main">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/stations" exact component={Stations} />
                    </Switch>
                </main>
            </div>
        </BrowserRouter>
    </StrictMode>
);

export default App;
