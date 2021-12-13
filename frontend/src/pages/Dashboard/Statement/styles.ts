import styled from "styled-components";


export const AStatementContainer = styled.div`

    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`

export const AStatementeItemContainer = styled.div`

    display: flex;
    width: 100%;

`

export const AStatementItemInfo = styled.div`

    p{
        margin-bottom: 2px;
    }


`

export const AStatementItemImage = styled.div<{
    type: 'paid' | 'received'
}>`

    width: 60px;
    height: 60px;
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({theme}) => theme.colors.background};
    border-radius: 10px;
    margin-bottom: 20px;

    background-color: ${({type,theme})=> type ==='paid' ? theme.colors.red: theme.colors.green};
    


`

