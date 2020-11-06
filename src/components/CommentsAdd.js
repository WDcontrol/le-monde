import React, { useState } from 'react'
import styled from 'styled-components'
import { addToLocalStorageArray } from '../hooks/addToLocalStorageArray'

const StyledCommentsAdd = styled.form``
const StyledCommentsAddInput = styled.input``
const StyledCommentsAddSubmit = styled.input``

const CommentsAdd = props => {

    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addToLocalStorageArray(props.data.title, { name, comment })
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