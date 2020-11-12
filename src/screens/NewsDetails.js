import React from 'react'
import styled from 'styled-components';
import { useParams } from "react-router-dom"
import { GetNewsDetails } from "../services/NewsApi"
import NewsItem from "../components/NewsItem"
import Loader from "../components/Loader"
import Error from "../components/Error"

const StyledNewsDetails = styled.div``

const NewsDetails = () => {
    const { newsName, newsSources } = useParams();
    const { error, isLoading, response } = GetNewsDetails(newsName, newsSources)

    return (
        <StyledNewsDetails>
            {error && <Error />}
            {isLoading && <Loader />}
            {response?.message && <div>API LIMITATION</div>}
            {response?.articles &&
                <NewsItem showDetails={true} data={response?.articles[0]} />
            }
        </StyledNewsDetails>
    )
}

export default NewsDetails