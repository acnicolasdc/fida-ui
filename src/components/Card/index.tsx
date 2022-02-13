import { Card } from 'antd'
import styled from 'styled-components'

export const CardBasic = styled(Card)`
    & .ant-card-head {
        border-bottom: 0;
    }
    & .ant-card-body {
        padding-top: 5px;
    }
`
