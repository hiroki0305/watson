import React from 'react';
import defaultDataset from "./dataset";
import './assets/styles/style.css'
import {QuestionsList,Header} from "./components";

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            list_display_type:"unresolved",//resolved,unresolved,all
            login_user:"",
            dataset_qa_list:defaultDataset,
            dataset_qa_detail:{},
        }
    }

    render() {
        return (
            <div>
                <section>
                    <div>
                        <Header />
                        <QuestionsList />
                    </div>
                </section>
            </div>
        );
    }
}

