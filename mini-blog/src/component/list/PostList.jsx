import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

function PostList(props) {
    const {posts, onClickItem} = props;
    console.log(posts);
    return (
        <Wrapper>
    
        </Wrapper>
    );
}

export default PostList;