import { Layout, Col, Row } from 'antd'
import styled from 'styled-components'

export const OfferMain = styled(Layout)`
    padding: 29px 35px 5px 35px;
`
export const OfferContent = styled(Row)`
    height: 100%;
`

export const ColGutter = styled(Col)`
    & > *:not(:last-child) {
        margin-bottom: 16px;
    }
`
export const SpaceBetween = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
`
export const OfferHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
`
