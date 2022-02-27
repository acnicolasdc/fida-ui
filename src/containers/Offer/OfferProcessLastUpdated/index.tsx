import { Progress, List, Avatar, Button } from 'antd'
import { ArrowsAltOutlined } from '@ant-design/icons'
import { CardBasic } from '@components/Card'

export default function OfferProcessLastUpdated() {
    return (
        <CardBasic
            title="Last Process updated"
            bordered={false}
            style={{ height: '100%' }}
        >
            <List.Item>
                <List.Item.Meta
                    avatar={
                        <Avatar src="https://randomuser.me/api/portraits/men/69.jpg" />
                    }
                    title={
                        <a href="https://ant.design">Nicolas Reyes Bejarano</a>
                    }
                    description="nicolasreyesbejarano@gmail.com"
                />
                <Button shape="circle" icon={<ArrowsAltOutlined />} />
            </List.Item>
            <Progress
                strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                }}
                percent={50}
            />
        </CardBasic>
    )
}
