import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

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
            {posts.map((post, index) => {
                return (
                    <PostListItem
                        key={post.id}
                        post={post}
                        onClick={() => {
                            onClickItem(post);
                            // post를 넣어주면 post.id 링크로 이동
                            // 왜냐면 Mainpaged에서 onClickItem 선언 시 post/${props.id}로 이동하라고 명시됨
                        }}
                    />
                );
            })}
        </Wrapper>
    );
}

export default PostList;