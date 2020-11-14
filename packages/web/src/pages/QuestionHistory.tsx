import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {HeaderMde} from "../templates/HeaderMde";
import {getMemos, MemoRecord} from "../models/indexeddb/memos";
import {Link} from "react-router-dom";

const HeaderArea = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
`

const Wrapper = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 3rem;
  padding: 0 1rem;
`

const Memo = styled.button`
    display: block;
    background-color: white;
    border: 1px solid gray;
    width: 100%;
    padding: 1rem;
    margin: 1rem 0;
    text-align: left;
  `

const MemoTitle = styled.div`
    font-size: 1rem;
    margin-bottom: 0.5rem;
  `

const MemoContent = styled.div`
    font-size: 0.85rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `

export const QuestionHistory: React.FC = () => {
    const [memos, setMemos] = useState<MemoRecord[]>([])

    useEffect(() => {
        getMemos().then(setMemos)
    }, [])

    return (
        <>
            <HeaderArea>
                <HeaderMde title={"履歴"}>
                    <Link to="/new">
                        エディタに戻る
                    </Link>
                </HeaderMde>
            </HeaderArea>
            <Wrapper>
                {memos.map(memo => (
                    <Memo key={memo.datetime}>
                        <MemoTitle>{memo.title}</MemoTitle>
                        <MemoContent>{memo.content}</MemoContent>
                    </Memo>
                ))}
            </Wrapper>
        </>
    )
}