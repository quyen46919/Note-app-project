import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AccountPage from './components/AccountPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import IntroPage from './components/IntroPage';
import HomePage from './components/HomePage';
import NotePage from './components/NotePage';
import NotFoundPage from './components/NotFoundPage';
import Header from 'components/Header';

function App() {
    return (
        <div className="App">
            <Header/>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={IntroPage} exact />
                    <Route path="/home" component={HomePage} exact />
                    <Route path="/account" component={AccountPage} exact />
                    <Route path="/login" component={LoginPage} exact />
                    <Route path="/register" component={RegisterPage} exact />
                    <Route path="/note" component={NotePage} exact />
                    <Route component={NotFoundPage} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
