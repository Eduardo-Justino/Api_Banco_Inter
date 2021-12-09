import { format } from 'date-fns';
import {FiDollarSign} from 'react-icons/fi';
import React from 'react';
import {StatementContainer, StatementItemImage,StatementeItemContainer,StatementItemInfo} from './styles'

interface StatementItemprops {
    user: {
        firstName: string,
        lasttName: string
    },
    value: number,
    type: 'pay' |'received',
    updateAt: Date

}


const StatementItem = ( {user,value,type,updateAt}:StatementItemprops) => {
   
    return(
        <StatementeItemContainer>
            <StatementItemImage type={type}>
                <FiDollarSign size={24}/>
            </StatementItemImage>
            <StatementItemInfo>
                <p className='primary-color'> {value.toLocaleString('pt-br',{
                    style:'currency',
                    currency:'BRL'
                })}</p>
                <p> {type === 'pay' ? 'pago a ' : 'recebido de'} <strong>{user.firstName} 
                {user.lastName}</strong></p>
                <p>{format (updateAt, "dd/MM/yyyy' 'as' HH:mm:'h' ")}</p>
            </StatementItemInfo>
        </StatementeItemContainer>
    )
}

const Statement = () => {
    
     const statements: StatementItemprops [] = [
        {
            user: {
                firstName: 'EDUARDO',
                lasttName: 'JUSTINO'
            },
            value: 250.00,
            type: 'pay',
            updateAt: new Date()
        
        },

        {
            user: {
                firstName: 'igor',
                lasttName: 'JUSTINO'
            },
            value: 600.00,
            type: 'received',
            updateAt: new Date()
    
        },

        {
            user: {
                firstName: 'deia',
                lasttName: 'JUSTINO'
            },
            value: 250.00,
            type: 'received',
            updateAt: new Date()
        
        },

    ]

    return (
            <StatementContainer>
                {statements.map(statement => <StatementItem{...statement}/>)}
            </StatementContainer>
    )
}

export default Statement;
