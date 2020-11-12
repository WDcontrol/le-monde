import React from 'react'
import styled from 'styled-components'
import NewsImg from './NewsImg'
import { Link } from "react-router-dom"
import { dateParser } from "../helpers"
import Comments from "./Comments"

const StyledNewsItem = styled.div`
    margin: 15px;
`
const Title = styled.h3``
const Desc = styled.p``
const Button = styled.div`
    
    background-color : #000;
    padding: 5px;
    margin: 5px;
    a {
        color: #fff;
        text-decoration: none;
    }
`
const SecondaryButton = styled(Button)`
    background-color: grey;
`

const Date = styled.p``
const NewsAuthors = styled.p``

const NewsItem = props => {
    const { source, author, title, description, url, urlToImage, publishedAt } = props.data
    const { showDetails } = props
    return <StyledNewsItem>
        {
            !showDetails ?
                <Link to={`/news/${source.id}/${title}`}><NewsImg alt={title} src={urlToImage} /></Link>
                : <NewsImg alt={title} src={urlToImage} />
        }
        <Title>{title}</Title>
        {showDetails && <Desc>{description}</Desc>}
        {!showDetails && <Button><Link to={`/news/${source.id}/${title}`}>Voir plus</Link></Button>}
        <SecondaryButton> <a href={url}>Article complet</a></SecondaryButton>
        <Date>Le {dateParser(publishedAt)}</Date>
        {showDetails && <NewsAuthors>Auteurs : {author}</NewsAuthors>}
        {showDetails && <Comments data={props.data}></Comments>}
    </StyledNewsItem>
}

export default NewsItem