import React from 'react'
import styled from 'styled-components'
import Loader from "./Loader"
import Error from "./Error"
import NewsList from "./NewsList"

const StyledNews = styled.div`
`

const News = props => {
    const { error, isLoading, response } = props.data
    return (
        <StyledNews>
            {error && <Error />}
            {isLoading && <Loader />}
            {response && <NewsList data={response} />}
        </StyledNews>
    )
}

export default News