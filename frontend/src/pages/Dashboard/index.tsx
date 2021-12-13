import Button from "../../components/Button";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Statement from "./Statement";
import useAuth from "../../hooks/useAuth";

import { DashboardBackground, BodyContainer, InlineContainer, InlineTitle} from "./styles";
import { useEffect, useState } from "react";
import { pay, request } from "../../services/resources/pix";

const Dashboard = ()=>{
    
    const {user,getCurrentUser} = useAuth();
    const wallet = user?.wallet || 0;

    const [key,setKey] = useState('')
    const [generateKey,setGenerateKey] = useState('')
    const [value,setValue] = useState('')

    const handleNewPayment  = async() =>{
        const{data} = await request(Number(value))
        if (data.copyPasteKey){
            setGenerateKey(data.copyPasteKey)
        }


    }

    const handleReceivedPix  = async() =>{

        try{
            const {data} = await pay(key)
            if(data.msg) {
                alert(data.msg)
                return
            }
            alert('nao foi possivel realizar o pagamento')

        }catch(e){
            console.log(e);
        }

    }

    useEffect (()=> {
        getCurrentUser()
        console.log('id', wallet)

    },[])

    if(!user){
        return null
    }
    

    return(
        <DashboardBackground>
            <Header/>
            <BodyContainer>
                <div>
                    <Card noShadow width="90%">
                        <InlineTitle>
                            <h2 className="h2"> Saldo Atual</h2>
                        </InlineTitle>
                        <InlineContainer>
                            <h3 className="wallet">
                                {wallet.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}
                            </h3>
                        </InlineContainer>    
                    </Card>
                    <Card width="90%">
                        <InlineTitle>
                            <h2 className="h2"> Receber PIX</h2>
                        </InlineTitle>
                        <InlineContainer>
                          <Input style={{flex: 1}} value={value} onChange={e => setValue(e.target.value) } placeholder="valor"/> 
                          <Button onClick={handleNewPayment}> Gerar Codigo</Button>
                        </InlineContainer>
                        {generateKey && (
                            <>
                            <p className="primary-color"> Pix copia e cola</p>
                            <p className="primary-color"> {generateKey}</p>
                            </>
                            )}
                    </Card>
                    <Card width="90%">
                        <InlineTitle>
                            <h2 className="h2"> Pagar Pix</h2>
                        </InlineTitle>
                        <InlineContainer>
                          <Input style={{flex: 1}} value={key} onChange={e => setKey(e.target.value) } placeholder="Insira chave pix"/> 
                          <Button onClick={handleReceivedPix}> Pagar Pix</Button>
                        </InlineContainer>   
                    </Card>
                    </div>
                    <div>
                    <Card noShadow width="90%">
                        <InlineTitle>
                            <h2 className="h2"> Extrato da conta</h2>
                        </InlineTitle>  
                           <Statement/>

                    </Card>
                </div>
            </BodyContainer>
        </DashboardBackground>
    )
}

export default Dashboard;