import { Col, Progress, Space } from 'antd'
import OfferSideMenuStatus from '@containers/Offer/OfferSideMenuStatus'
import OfferList from '@containers/Offer/OfferList'
import OfferShortcut from '@containers/Offer/OfferShortcut'
import OfferCreate from '@containers/Offer/OfferCreate'
import { LayoutRow } from '@components/Layout'
import { SubTitle } from '@components/Typography'
import { CardBasic } from '@components/Card'
import useGetComponentSize from '@hooks/useGetComponentSize'
import { OfferMain, OfferHeader, OfferContent, ColGutter } from './offer.style'

export default function Offer() {
    const { ref, height } = useGetComponentSize()
    return (
        <LayoutRow>
            <OfferSideMenuStatus />
            <OfferMain>
                <OfferHeader>
                    <SubTitle>Offer List</SubTitle>
                    <OfferCreate />
                </OfferHeader>
                <OfferContent gutter={16} ref={ref}>
                    <Col span={14}>
                        <OfferList height={height} />
                    </Col>
                    <ColGutter span={10}>
                        <OfferShortcut />
                        <CardBasic title="Technologies completed">
                            <Space>
                                <Progress
                                    type="circle"
                                    strokeColor={{
                                        '0%': '#108ee9',
                                        '100%': '#87d068',
                                    }}
                                    percent={90}
                                />
                                <Progress
                                    type="circle"
                                    strokeColor={{
                                        '0%': '#108ee9',
                                        '100%': '#87d068',
                                    }}
                                    percent={100}
                                />
                            </Space>
                        </CardBasic>
                    </ColGutter>
                </OfferContent>
            </OfferMain>
        </LayoutRow>
    )
}
