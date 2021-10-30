import Header from 'components/Header';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import AccountPage from './components/AccountPage';
import HomePage from './components/HomePage';
import NotePage from './components/NotePage';
import NotFoundPage from './components/NotFoundPage';

function NestedRoute() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route path="/home" component={HomePage} exact/>
                <Route path="/home/account" component={AccountPage} exact/>
                <Route path="/home/note" component={NotePage} exact/>
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    );
}

export default NestedRoute;
