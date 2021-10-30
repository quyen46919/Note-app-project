import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NestedRoute from 'NestedRoute';
import IntroPage from './components/IntroPage';
import './App.scss';
import LoginPage from 'components/LoginPage';
import RegisterPage from 'components/RegisterPage';
import NotFoundPage from 'components/NotFoundPage';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={IntroPage} exact/>
                    <Route path="/home" component={NestedRoute}/>
                    <Route path="/login" component={LoginPage} exact />
                    <Route path="/register" component={RegisterPage} exact />
                    <Route component={NotFoundPage} exact />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
