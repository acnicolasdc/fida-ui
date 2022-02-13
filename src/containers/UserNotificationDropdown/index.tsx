import { Badge } from 'antd'
import { BellOutlined } from '@ant-design/icons'
import { Circle } from './userNotificationDropdown.style'

export default function UserNotificationDropdown() {
    // TO DO: Here we should make the connection to the notification socket
    return (
        <Badge count={1}>
            <Circle>
                <BellOutlined size={18} />
            </Circle>
        </Badge>
    )
}
