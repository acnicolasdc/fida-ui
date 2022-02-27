import { ShortcutCard, Column, Head } from './shortcutCard.style'
import { Heading } from '@components/Typography'
import { MacCommandOutlined } from '@ant-design/icons'
import ButtonCircleRemove from '@components/Button/ButtonCircleRemove'

export default function ShortcutCardItem() {
    return (
        <Column className="gutter-row" span={12}>
            <ShortcutCard>
                <Head>
                    <MacCommandOutlined
                        style={{ fontSize: 36, color: '#CCC' }}
                    />
                    <ButtonCircleRemove size="small" />
                </Head>
                <Heading>React / Node</Heading>
            </ShortcutCard>
        </Column>
    )
}
