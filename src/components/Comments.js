import React, { useState } from 'react'
import styled from 'styled-components'

import CommentsAdd from './CommentsAdd'
import CommentsList from './CommentsList'

const StyledComments = styled.div`
    margin : 5px;
`
const StyledCommentsTitle = styled.h2``

const Comments = props => {
    const [commentsList, setCommentsList] = useState(JSON.parse(localStorage.getItem(props.data.title)));

    const handleChange = () => {
        setCommentsList(JSON.parse(localStorage.getItem(props.data.title)))
    }

    return (
        <StyledComments>
            <StyledCommentsTitle>Comments</StyledCommentsTitle>
            <CommentsAdd data={props.data} handleChange={handleChange} ></CommentsAdd>
            <CommentsList data={commentsList}></CommentsList>
        </StyledComments>
    )
}

export default Comments