import { ShortcutCard, Column, Head } from './shortcutCard.style'
import { Avatar } from 'antd'
import { Heading } from '@components/Typography'
import { MacCommandOutlined } from '@ant-design/icons'
import ButtonCircleRemove from '@components/Button/ButtonCircleRemove'

export default function ShortcutCardItem() {
    return (
        <Column className="gutter-row" span={12}>
            <ShortcutCard>
                <Head>
                    <Avatar
                        icon={<MacCommandOutlined />}
                        style={{ backgroundColor: '#1890ff' }}
                        shape="square"
                    />
                    <ButtonCircleRemove size="small" />
                </Head>
                <Heading>React / Node</Heading>
            </ShortcutCard>
        </Column>
    )
}
