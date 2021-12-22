import BoardPage from 'pages/BoardPage';
import CalendarPage from 'pages/CalenderPage';
import Header from 'components/Header';
import NotePage from 'pages/NotePage';
import NotFoundPage from 'pages/NotFoundPage';
import {
    BrowserRouter as Router, Redirect, Route, Switch
} from 'react-router-dom';
import './App.scss';
import AccountPage from './pages/AccountPage';
import HomePage from './pages/HomePage';
import IntroPage from './pages/IntroPage';
import ProfilePage from './pages/ProfilePage';
import { useContext } from 'react';
import { AuthContext } from 'context/AuthContext';

function App() {
    const { nottableUser } = useContext(AuthContext);

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/account" component={AccountPage} exact/>
                    <Route path="/intro" component={IntroPage} exact/>
                    <Route path="/" render={() =>
                        nottableUser ? (
                            <>
                                <Header/>
                                <Switch>
                                    <Route path="/" component={HomePage} exact/>
                                    <Route path="/note" component={NotePage} exact/>
                                    <Route path="/profile" component={ProfilePage} exact/>
                                    <Route path="/calendar" component={CalendarPage} exact />
                                    <Route path="/home/:noteId" component={BoardPage} exact/>
                                    <Route component={NotFoundPage}/>
                                </Switch>
                            </>
                        ) : ( <Redirect to="/account"/> )
                    }/>
                    <Route component={NotFoundPage} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
