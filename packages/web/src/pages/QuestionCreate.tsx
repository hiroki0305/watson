import React from "react";
import {Markdown} from "../templates/Markdown";
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body * {
    box-sizing: border-box;
  }
`

export const QuestionCreate: React.FC = () => {
    return (
        <>
            <GlobalStyle/>
            <Markdown/>
        </>
    )
}