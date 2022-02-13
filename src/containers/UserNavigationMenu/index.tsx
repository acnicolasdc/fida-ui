import paths from '@routes/paths.json'
import { Menu, NavItem } from './userNavigationMenu.style'

export default function UserNavigationMenu() {
    // TO DO: here we should make the fetch
    return (
        <Menu>
            <NavItem to={paths.dashboard}>Dashboard</NavItem>
            <NavItem to="/faq">Offers</NavItem>
            <NavItem to="/faqe">Database</NavItem>
        </Menu>
    )
}
