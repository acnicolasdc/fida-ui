import { Layout } from 'antd'
import IconLogo from '@components/Icon/Logo'
import styled from 'styled-components'

export const Container = styled(Layout)`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ContentForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 429px;
    padding: 44px 30px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.14);
`

export const Logo = styled(IconLogo)`
    scale: 15px;
    margin-bottom: 46px;
`
