import React from 'react'
import styled from 'styled-components'
import { GetNewsLeMonde } from '../services/NewsApi'
import News from "../components/News"

const StyledHome = styled.div``

const Home = () => {
    let NewsLeMonde = GetNewsLeMonde()

    return (
        <StyledHome>
            <News data={NewsLeMonde}></News>
        </StyledHome >
    )
}

export default Home