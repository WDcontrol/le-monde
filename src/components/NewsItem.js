import React from 'react'
import styled from 'styled-components'
import NewsImg from './NewsImg'
import { Link } from "react-router-dom"

const StyledNewsItem = styled.div`
    width: 100%;
`

const NewsItem = props => {
    const { source, author, title, description, url, urlToImage, publishedAt } = props.data
    return <StyledNewsItem>
        <h1>{source.name}</h1>
        <h1>{author}</h1>
        <h1>{title}</h1>
        <p>{description}</p>
        <a href={url}>link</a>
        <Link to={`/news/${source.id}/${title}`}>internal link</Link>
        <NewsImg alt={title} src={urlToImage} />
        <p>{publishedAt}</p>
    </StyledNewsItem>
}

export default NewsItem