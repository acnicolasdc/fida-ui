import { Row } from 'antd'
import { CardBasic } from '@components/Card'
import ShortcutCardItem from './components/ShortcutCard'

export default function OfferShortcut() {
    return (
        <CardBasic title="Shortcuts Offer">
            <Row gutter={16}>
                <ShortcutCardItem />
                <ShortcutCardItem />
                <ShortcutCardItem />
                <ShortcutCardItem />
            </Row>
        </CardBasic>
    )
}
