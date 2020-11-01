import React from "react";
import {BrowserRouter as Router ,Route, Switch} from "react-router-dom";
import QuestionsList from "../pages/QuestionsList";
import {QuesitonCreate} from "../pages/QuesitonCreate";

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={QuestionsList}/>
                <Route exact path="/new" component={QuesitonCreate}/>
            </Switch>
        </Router>
    )
};

export default App;