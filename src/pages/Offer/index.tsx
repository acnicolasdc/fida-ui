import { Button, Row, Col } from 'antd'
import OfferSideMenuStatus from '@containers/Offer/OfferSideMenuStatus'
import OfferList from '@containers/Offer/OfferList'
import { LayoutRow } from '@components/Layout'
import { SubTitle } from '@components/Typography'
import useGetComponentSize from '@hooks/useGetComponentSize'
import { OfferMain, OfferHeader } from './offer.style'

export default function Offer() {
    const { ref, height } = useGetComponentSize()
    console.log(height)
    return (
        <LayoutRow>
            <OfferSideMenuStatus />
            <OfferMain>
                <OfferHeader>
                    <SubTitle>Offer List</SubTitle>
                    <Button type="primary">Create Offer</Button>
                </OfferHeader>
                <Row gutter={16} style={{ height: '100%' }} ref={ref}>
                    <Col span={14}>
                        <OfferList height={height} />
                    </Col>
                    <Col span={10}></Col>
                </Row>
            </OfferMain>
        </LayoutRow>
    )
}
