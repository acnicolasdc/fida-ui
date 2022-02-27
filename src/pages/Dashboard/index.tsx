import { Col, Divider } from 'antd'
import UserStatics from '@containers/User/UserStatics'
import OfferPinnedList from '@containers/Offer/OfferPinnedList'
import ContactDirectory from '@containers/ContactDirectory'
import OfferProcessLastUpdated from '@containers/Offer/OfferProcessLastUpdated'
import OfferLastCreated from '@containers/Offer/OfferLastCreated'

import { Layout } from '@components/Layout'
import { GridRow } from './dashboard.style'

export default function Dashboard() {
    return (
        <Layout>
            <UserStatics />
            <Divider orientation="left" />
            <GridRow gutter={16}>
                <Col span={12}>
                    <OfferProcessLastUpdated />
                </Col>
                <Col span={12}>
                    <OfferLastCreated />
                </Col>
            </GridRow>
            <GridRow gutter={16}>
                <Col span={12}>
                    <OfferPinnedList />
                </Col>
                <Col span={12}>
                    <ContactDirectory />
                </Col>
            </GridRow>
        </Layout>
    )
}
