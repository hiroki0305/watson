import React from "react";
import Container from '@material-ui/core/Container';

import Header from "../templates/Header";
import Question from "../templates/Question";


const QuestionsList = () =>{
    return(
        <Container maxWidth="md">
            <Header/>
            <Question/>
        </Container>
    )
}

export default QuestionsList