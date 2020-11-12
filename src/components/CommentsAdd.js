import React, { useState } from 'react'
import styled from 'styled-components'
import { addToComments } from '../helpers'

const StyledCommentsAdd = styled.form`
    display:flex;
    flex-direction: column;
`
const StyledCommentsAddInput = styled.input`
    padding: 10px;
    margin: 5px 0;
`
const StyledCommentsAddSubmit = styled.input`
    background-color: #000;
    color: #fff;
    padding: 10px;
`

const CommentsAdd = props => {

    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addToComments(props.data.title, { name, comment })
        props.handleChange();
    }

    return (
        <StyledCommentsAdd onSubmit={handleSubmit}>
            <StyledCommentsAddInput required placeholder="name" value={name} onChange={e => setName(e.target.value)} />
            <StyledCommentsAddInput required placeholder="comment" value={comment} onChange={e => setComment(e.target.value)} />
            <StyledCommentsAddSubmit type="submit" value="Comment" />
        </StyledCommentsAdd>
    )
}

export default CommentsAdd