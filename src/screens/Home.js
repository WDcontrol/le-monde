import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { GetNewsLeMonde } from '../services/NewsApi'
import News from "../components/News"

const StyledHome = styled.div``
const LoadMore = styled.button`
    color: #fff;
    background-color: red;
    border:none;
    padding: 10px;
    margin: 5px 0;
`

const Home = () => {
    const getCurrentCoordinates = () => document.querySelector("body").getBoundingClientRect()
    const [page, setPage] = useState(1)
    const [coordinates, setCoordinates] = useState(getCurrentCoordinates())
    let { response = { articles: [] }, isLoading, error } = GetNewsLeMonde(page)
    const [news, setNews] = useState({ articles: [] })

    useEffect(() => {
        if (!response) return
        setCoordinates(getCurrentCoordinates());
        setNews({
            articles: [...news.articles, ...response?.articles]
        })
    }, [response?.articles])

    useEffect(() => {
        window.scrollTo(0, Math.abs(coordinates.y))
    }, [news])

    // const handleScrollBottom = () => {
    //     const isBottom = () => getCurrentCoordinates().bottom < 300;
    //     if (isBottom() && page < 10) {
    //         setPage(page + 1)
    //     }
    // }

    // useEffect(() => {
    //     document.addEventListener('scroll', handleScrollBottom);
    // }, [])

    return (
        <StyledHome>
            <News data={{ news, isLoading, error }}></News>
            {page < 10 && <LoadMore onClick={() => setPage(page + 1)}>Charger plus</LoadMore>}
            {/* page can't be more than 10 */}
        </StyledHome >
    )
}

export default Home