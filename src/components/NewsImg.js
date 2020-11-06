import React from 'react'
import styled from 'styled-components';

const StyledNewsImg = styled.img`
    max-width: 100%;
`

const NewsImg = props => {
    return (
        <StyledNewsImg {...props} ></StyledNewsImg>
    )
}

export default NewsImg