import styled from 'styled-components'

export const List = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-top: 20px;
`
export const Item = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    padding: 10px 0px;
    padding-right: 5px;
    padding-left: 10px;
    justify-content: space-between;
    &:active {
        background-color: #f9f9f9;
    }
`
