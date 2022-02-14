import { PageHeader } from 'antd'
import styled from 'styled-components'

export const Navigation = styled(PageHeader)`
    border-bottom: 1px solid #e5e5e5;
    & .ant-page-header-heading-title {
        line-height: 0 !important;
    }
    & .ant-page-header-heading-extra {
        display: flex;
        & > *:not(:last-child) {
            margin-right: 15px;
        }
    }
`
