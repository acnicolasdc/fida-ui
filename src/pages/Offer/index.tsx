import { Button, Col } from 'antd'
import OfferSideMenuStatus from '@containers/Offer/OfferSideMenuStatus'
import OfferList from '@containers/Offer/OfferList'
import { LayoutRow } from '@components/Layout'
import { SubTitle } from '@components/Typography'
import useGetComponentSize from '@hooks/useGetComponentSize'
import { OfferMain, OfferHeader, OfferContent } from './offer.style'

export default function Offer() {
    const { ref, height } = useGetComponentSize()
    return (
        <LayoutRow>
            <OfferSideMenuStatus />
            <OfferMain>
                <OfferHeader>
                    <SubTitle>Offer List</SubTitle>
                    <Button type="primary">Create Offer</Button>
                </OfferHeader>
                <OfferContent gutter={16} ref={ref}>
                    <Col span={14}>
                        <OfferList height={height} />
                    </Col>
                    <Col span={10}></Col>
                </OfferContent>
            </OfferMain>
        </LayoutRow>
    )
}
