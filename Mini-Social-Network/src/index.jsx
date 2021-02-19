import './index.scss';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import userStore from 'stores/user';
import Header from 'components/Header';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Signup from 'pages/Signup';

const App = () => (
    <Provider store={userStore}>
        <main className="App">
            <Router>
                <Header />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                </Switch>
            </Router>
        </main>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
