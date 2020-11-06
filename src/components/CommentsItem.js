import React from 'react'
import styled from 'styled-components'

const StyledCommentsItem = styled.div``

const CommentsItem = props => {
    return (
        <StyledCommentsItem>
            <h1>{props.data.name}</h1>
            <p>{props.data.comment}</p>
        </StyledCommentsItem>
    )
}

export default CommentsItem