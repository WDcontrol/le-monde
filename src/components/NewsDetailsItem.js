import React from 'react'
import styled from 'styled-components'
import NewsImg from './NewsImg';
import Comments from "./Comments"
const StyledNewsDetailsItem = styled.div`
    margin: 15px;
`

const NewsDetailsItem = props => {
    const { source, author, title, description, url, urlToImage, publishedAt } = props.data
    return (
        <StyledNewsDetailsItem>
            <h1>{source.name}</h1>
            <h1>{author}</h1>
            <h1>{title}</h1>
            <p>{description}</p>
            <a href={url}>link</a>
            <NewsImg alt={title} src={urlToImage} />
            <p>{publishedAt}</p>
            <Comments data={props.data}></Comments>
        </StyledNewsDetailsItem>
    )
}

export default NewsDetailsItem