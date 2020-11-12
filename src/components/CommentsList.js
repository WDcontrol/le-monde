import React from 'react'
import styled from 'styled-components'
import CommentsItem from "./CommentsItem"

const StyledCommentsList = styled.div`
    text-align: left;
`
const StyledCommentsLabel = styled.h4`

`

const CommentsList = props => {
    return (
        <StyledCommentsList>
            <StyledCommentsLabel>Comments :</StyledCommentsLabel>
            {props.data?.map((item, index) => (
                <CommentsItem data={item} key={index} />
            ))}
        </StyledCommentsList>
    )
}

export default CommentsList