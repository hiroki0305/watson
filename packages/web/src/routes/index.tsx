import React from "react";
import {BrowserRouter as Router ,Route, Switch} from "react-router-dom";
import QuestionsList from "../pages/QuestionsList";
import {QuestionCreate} from "../pages/QuestionCreate";

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={QuestionsList}/>
                <Route exact path="/new" component={QuestionCreate}/>
            </Switch>
        </Router>
    )
};

export default App;