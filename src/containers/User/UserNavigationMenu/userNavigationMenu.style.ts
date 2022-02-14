import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Menu = styled.nav`
    display: flex;
    align-items: center;
    & > *:not(:last-child) {
        margin-right: 25px;
    }
`
export const NavItem = styled(NavLink)`
    &:hover {
        text-decoration: underline;
    }
    &[class*='active'] {
        color: #003a8c;
        font-weight: 500;
    }
`
