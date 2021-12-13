import { format } from 'date-fns';
import {FiDollarSign} from 'react-icons/fi';
import {AStatementContainer, AStatementItemImage,AStatementeItemContainer,AStatementItemInfo} from './styles'
import {transaction} from '../../../services/resources/pix';
import {useState, useEffect} from 'react'

interface StatementItems {
    user: {
        firstName: string,
        lastName: string
    },
        value: number,
        type: 'paid' | 'received',
        updateAt: Date  
}

const StatementItem = ({user,value,type,updateAt}: StatementItems) => {
    
   
    return(
            <AStatementeItemContainer>
                <AStatementItemImage type={type}>
                    <FiDollarSign size={24}/>
                </AStatementItemImage>
                <AStatementItemInfo>
                    <p className='primary-color'> {value.toLocaleString('pt-br',{
                        style:'currency',
                        currency:'BRL'
                    })}</p>
                    <p> {type === 'paid' ? 'pago a ' : 'recebido de'} <strong>
                     {user.firstname}_{user.lastName}</strong></p>
                    <p>{updateAt}</p>
                </AStatementItemInfo>
            </AStatementeItemContainer>
    )
}


const Statement = () => {

    const [statements, setStatements] = useState([]); 
    

    const getAlltransactions = async() => {
        
        const {data} = await transaction();
        setStatements(data.transactions);
        console.log("teste",data.transactions)
        

    }

    useEffect(()=>{

        getAlltransactions();
        

    },[])

    
    return (
        <AStatementContainer>
             {statements.length > 0 && statements.map(statement => <StatementItem{...statement}/>)}   
        </AStatementContainer>
    )
}

export default Statement;
