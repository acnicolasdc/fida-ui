import { Col } from 'antd'
import styled from 'styled-components'

export const Column = styled(Col)`
    margin-bottom: 16px;
`

export const Head = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`

export const ShortcutCard = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    height: 110px;
    background-color: #f0f2f5;
    border-radius: 2px;
    justify-content: space-between;
    padding: 15px;
    cursor: pointer;
`
