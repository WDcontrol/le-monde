import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
    color: #fff;
    background-color: #000;
    padding: 15px;
`

const Footer = () => {
    return (
        <StyledFooter>Jérôme CELEBI - &copy; {new Date().getFullYear()} All rights reserved </StyledFooter>
    )
}

export default Footer;