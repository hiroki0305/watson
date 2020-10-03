import React from "react";
import {Question} from "../index";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const QuestionsList = () =>{
    return(
        <Container maxWidth="md">
            <Question />
        </Container>
    )
}

export default QuestionsList