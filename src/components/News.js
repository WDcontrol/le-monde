import React from 'react'
import styled from 'styled-components'
import Loader from "./Loader"
import Error from "./Error"
import NewsList from "./NewsList"

const StyledNews = styled.div`
`

const News = props => {
    const { error, isLoading, news } = props.data
    return (
        <StyledNews>
            {error && <Error />}
            {isLoading && <Loader />}
            {news && <NewsList data={news} />}
        </StyledNews>
    )
}

export default News