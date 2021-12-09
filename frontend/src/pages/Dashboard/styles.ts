import styled from "styled-components";

export const DashboardBackground = styled.main`

    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    flex-direction: column;

    background-color: ${({theme}) => theme.colors.background};

`

export const BodyContainer = styled.main`

    width: 80%;
    margin-top: 40px;

    display: flex;
    justify-content: space-between;

    > div {
        flex: 1;

        & > div {
            margin-bottom: 20px;

        }

        &::nth-child(2){
            display: flex;
            justify-content: flex-end;
        }

    }


   

`

export const InlineTitle = styled.div`
    
    width: 100%;
    font-size: 16px;
  
`

export const InlineContainer = styled.div`
    
    margin-top: 5px;
    width: 100%;
   
    h3{
        font-size: 36px;
        color:${({theme}) => theme.colors.primary};
    }

    div {
        flex: 4;
        margin-right: 20px;
        
    }

    button{
        flex:1
        
    }


`