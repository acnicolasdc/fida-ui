import { Statistic, Card, Row, Col } from 'antd'
import {
    FileDoneOutlined,
    RedoOutlined,
    FolderOpenOutlined,
} from '@ant-design/icons'

export default function UserStatics() {
    return (
        <Row gutter={16}>
            <Col span={8}>
                <Card>
                    <Statistic
                        title="Developers Hired"
                        value={20}
                        precision={0}
                        valueStyle={{ color: '#87d068' }}
                        prefix={<FileDoneOutlined />}
                    />
                </Card>
            </Col>
            <Col span={8}>
                <Card>
                    <Statistic
                        title="Ongoing Process"
                        value={9}
                        precision={0}
                        valueStyle={{ color: '#eb9616' }}
                        prefix={<RedoOutlined />}
                    />
                </Card>
            </Col>
            <Col span={8}>
                <Card>
                    <Statistic
                        title="Open Offers"
                        value={4}
                        precision={0}
                        valueStyle={{ color: '#108ee9' }}
                        prefix={<FolderOpenOutlined />}
                    />
                </Card>
            </Col>
        </Row>
    )
}
