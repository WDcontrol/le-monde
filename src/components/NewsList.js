import React from 'react'
import styled from 'styled-components'
import NewsItem from "./NewsItem"

const StyledNewsList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const NewsList = props => {
    return (
        <StyledNewsList>
            {props.data.articles.map((article, index) => (
                <NewsItem showDetails={false} data={article} key={index} />
            ))}
        </StyledNewsList>
    )
}

export default NewsList