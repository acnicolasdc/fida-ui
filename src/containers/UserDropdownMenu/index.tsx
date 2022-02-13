import { Avatar, Dropdown, Menu } from 'antd'
import { UserOutlined } from '@ant-design/icons'

export default function UserDropdownMenu() {
    // TO DO: here we should make the fetch
    return (
        <Dropdown
            key="1"
            overlay={
                <Menu>
                    <Menu.Item key="0">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.antgroup.com"
                        >
                            1st menu item
                        </a>
                    </Menu.Item>
                    <Menu.Item key="1">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.aliyun.com"
                        >
                            2nd menu item
                        </a>
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Item key="3">Logout</Menu.Item>
                </Menu>
            }
        >
            <Avatar icon={<UserOutlined />} />
        </Dropdown>
    )
}
