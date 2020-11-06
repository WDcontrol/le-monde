import React from 'react'
import styled from 'styled-components'
import CommentsItem from "./CommentsItem"

const StyledCommentsList = styled.div``

const CommentsList = props => {
    return (
        <StyledCommentsList>
            {props.data?.map((item, index) => (
                <CommentsItem data={item} key={index} />
            ))}
        </StyledCommentsList>
    )
}

export default CommentsList