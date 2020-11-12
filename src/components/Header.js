import React from 'react'
import styled from 'styled-components'
import Logo from "../assets/logo.svg"
// import Navbar from "./Navbar"
import { Link } from "react-router-dom"

const StyledHeader = styled.div`
    margin: 20px;
`
const LogoImg = styled.img`
    height: 50px;
`

const Header = () => {
    return (
        <StyledHeader>
            <Link to="/">
                <LogoImg src={Logo} alt="Le monde" />
            </Link>
            {/* <Navbar></Navbar> */}
        </StyledHeader>
    )
}

export default Header;