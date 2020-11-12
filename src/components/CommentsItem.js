import React from 'react'
import styled from 'styled-components'

const StyledCommentsItem = styled.div`
`

const CommentsItem = props => {
    return (
        <StyledCommentsItem>
            <p>
                <b>{props.data.name} </b> : {props.data.comment}
            </p>

        </StyledCommentsItem>
    )
}

export default CommentsItem