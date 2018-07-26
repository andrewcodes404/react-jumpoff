import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './style/style.css';
import App from './components/App';
import NotFound from "./components/NotFound";
import registerServiceWorker from './registerServiceWorker';


const Routes = (
    <BrowserRouter>
        <div className="container">
            <Switch>
                <Route path="/" component={App} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
)


ReactDOM.render(Routes, document.getElementById('root'));
registerServiceWorker();
