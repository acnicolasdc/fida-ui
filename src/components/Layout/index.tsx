import {
    Layout as StyledLayout,
    Menu as StyledMenu,
    List as StyledList,
} from 'antd'
import styled from 'styled-components'

export const Layout = styled(StyledLayout)`
    height: calc(100vh - 72px);
    padding: 20px 10% 0px 10%;
    display: flex;
    flex-direction: column;
`
export const LayoutRow = styled(StyledLayout)`
    height: calc(100vh - 72px);
    display: flex;
    flex-direction: row;
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
export const Menu = styled(StyledMenu)`
    width: 256px;
`

export const List = styled(StyledList)`
    & .rc-virtual-list-scrollbar {
        display: none !important;
    }
    & .rc-virtual-list-holder-inner {
        & > *:not(:last-child) {
            margin-bottom: 15px;
        }
    }
`
