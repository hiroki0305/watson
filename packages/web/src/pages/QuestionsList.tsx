import React from "react";
import Container from '@material-ui/core/Container';

import Header from "../templates/Header";
import {Test} from "../templates/Test"


const QuestionsList = () =>{
    return(
        <Container maxWidth="md">
            <Header/>
            <Test/>
        </Container>
    )
}

export default QuestionsList