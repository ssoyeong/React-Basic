import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

function PostWritePage(props) {
    const navigate = useNavigate();
    const data = JSON.parse(localStorage.getItem('user'));
    console.log('PostWritePage 렌더링');
    console.log(data);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    // 불러온 json에 새로 작성한 글의 데이터를 추가하는 함수
    const writePost = ({title, content}) => {
        data.push(
            {
                id: data[data.length-1].id + 1,
                title: title,
                content: content,
                comments: []
            }
        );

        localStorage.setItem('user', JSON.stringify(data));
    }

    return (
        <Wrapper>
            <Container>
                <TextInput
                    height={20}
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />

                <TextInput
                    height={480}
                    value={content}
                    onChange={(event) => {
                        setContent(event.target.value);
                    }}
                />   

                <Button
                    title="글 작성하기"
                    onClick={() => {
                        writePost({title, content});
                        navigate("/");
                    }}
                />
            </Container>
        </Wrapper>
    );
}

export default PostWritePage;