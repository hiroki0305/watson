import React from "react";
import {BrowserRouter as Router ,Route, Switch} from "react-router-dom";
import QuestionsList from "../pages/QuestionsList";
import {QuestionCreate} from "../pages/QuestionCreate";
import {QuestionHistory} from "../pages/QuestionHistory";

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={QuestionsList}/>
                <Route exact path="/new" component={QuestionCreate}/>
                <Route exact path="/history" component={QuestionHistory}/>
            </Switch>
        </Router>
    )
};

export default App;