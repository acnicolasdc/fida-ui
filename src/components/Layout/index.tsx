import { Layout as StyledLayout } from 'antd'
import styled from 'styled-components'

export const Layout = styled(StyledLayout)`
    height: calc(100vh - 72px);
    padding: 20px 10% 0px 10%;
    display: flex;
    flex-direction: column;
`

export const HeaderPage = styled.div`
    width: 100%;
    height: 130px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: white;
`
