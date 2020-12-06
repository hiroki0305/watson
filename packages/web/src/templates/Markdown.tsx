import React, {useState} from "react";
import styled from "styled-components";

import {useStateWithStorage} from "../hooks/use_state_with_storage";
import ReactMarkdown from "react-markdown";
import {putMemo} from "../models/indexeddb/memos";
import {AppContainedButtons} from "../components/button";
import {SaveModal} from "./modal/SaveModal";
import {Link} from "react-router-dom";
import {HeaderMde} from "./HeaderMde";

const Wrapper = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top:3rem
`

const TextArea = styled.textarea`
  border-right: 1px solid silver;
  border-top: 1px solid silver;
  bottom: 0;
  font-size: 1rem;
  left: 0;
  padding: 0.5rem;
  position: absolute;
  top: 0;
  width: 50vw;
`

const Preview = styled.div`
  border-top: 1px solid silver;
  bottom: 0;
  overflow-y: scroll;
  padding: 1rem;
  position: absolute;
  right: 0;
  top: 0;
  width: 50vw;
`
const HeaderArea = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  `

const StorageKey = 'pages/Markdown:content'

export const Markdown: React.FC = () => {
    const [content, setContent] = useStateWithStorage('質問を入力してください', StorageKey)
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <HeaderArea>
                <HeaderMde title={"Markdown Editor"}>
                    <AppContainedButtons onClick={() => setShowModal(true)} mode={"create"}>
                        保存する
                    </AppContainedButtons>
                    <Link to="/history">
                        履歴を見る
                    </Link>
                </HeaderMde>
            </HeaderArea>
            <Wrapper>
                <TextArea
                    onChange={(event) => {
                        setContent(event.target.value)
                    }}
                    value={content}
                />
                <Preview>
                    <ReactMarkdown source={content}/>
                </Preview>
            </Wrapper>
            {showModal && (
                <SaveModal
                    onSave={(title: string): void => {
                        putMemo(title, content)
                        setShowModal(false)
                    }}
                    onCancel={() => setShowModal(false)}
                />
            )}
        </>
    )
}