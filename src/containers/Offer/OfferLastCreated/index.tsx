import { CardBasic } from '@components/Card'
import CardOffer from '@components/Card/CardOffer'

export default function OfferLastCreated() {
    return (
        <CardBasic title="Last Offer created" bordered={false}>
            <CardOffer />
        </CardBasic>
    )
}
