import { Menu } from '@components/Layout'

export default function OfferSideMenuStatus() {
    return (
        <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
        >
            <Menu.Item key="1">Open</Menu.Item>
            <Menu.Item key="2">Closed</Menu.Item>
        </Menu>
    )
}
