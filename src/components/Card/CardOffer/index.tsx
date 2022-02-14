import { Space, Avatar } from 'antd'
import { FileSyncOutlined } from '@ant-design/icons'
import { CardBasic } from '@components/Card'
import { Text } from '@components/Typography'
import { CardContent } from './cardOffer.style'

export default function CardOffer() {
    return (
        <CardBasic
            title={
                <Space size="middle">
                    <Avatar shape="square" icon={<FileSyncOutlined />} />
                    React Developer P44
                </Space>
            }
            extra={<Text>Create date: 10/11/2021</Text>}
        >
            <CardContent>
                <Space size="middle">
                    <Space size="small">
                        <Text strong>Work mode:</Text>
                        <Text>Remote</Text>
                    </Space>
                    <Space size="small">
                        <Text strong>Contract Type:</Text>
                        <Text>Unlimited</Text>
                    </Space>
                    <Space size="small">
                        <Text strong>Bilingual:</Text>
                        <Text>Required</Text>
                    </Space>
                    <Space size="small">
                        <Text strong>Seniority:</Text>
                        <Text>Senior</Text>
                    </Space>
                </Space>
            </CardContent>
        </CardBasic>
    )
}
