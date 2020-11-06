import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

const StyledNavbar = styled.div`
    display: flex;

`
const Navbar = () => {
    return (
        <StyledNavbar>
            <NavLink to="/myComments">My comments</NavLink>
        </StyledNavbar>
    )
}

export default Navbar