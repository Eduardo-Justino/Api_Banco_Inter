import { AxiosResponse } from 'axios';
import { createContext, useEffect, useState,useCallback } from 'react';
import {signIn,signUp,SignInData,SignUpData, me} from '../services/resources/user'

interface UserDto{
    id: string,
    firstName: string ,
    lastName: string,
    accountNumber: number,
    accountDigit: number,
    wallet: number,
    email: string
}

interface ContextData {
    user: UserDto
    userSignIn: (userData: SignInData) => Promise<UserDto>;
    userSignUp: (userData: SignUpData) => Promise<UserDto>;
    getCurrentUser: () => Promise<UserDto>;
   
}
export const AuthContext = createContext<ContextData>({} as ContextData)

export const AuthProvider: React.FC = ({children}) =>{

    const [user,setUser] = useState<UserDto>(()=>{

        const user = localStorage.getItem('@inter:User');
        if (user) {
            return JSON.parse(user);
        }

        return {} as UserDto


    });


    const userSignIn = async (userData: SignInData) =>{
        const {data} = await signIn(userData);

        if(data?.status === 'error') {
            return data;
        }

        if(data.acessToken){
         localStorage.setItem('@inter:Token', data.acessToken);
         }

        return getCurrentUser();
    
        
    }

    const getCurrentUser = async () => {
        const {data} = await me();
        setUser(data)
        localStorage.setItem('@inter:User', JSON.stringify(user));
        return data ;
        

    }

    const userSignUp = async (userData: SignUpData) =>{
        const {data} = await signUp(userData);
        if(data.acessToken){
        localStorage.setItem('@inter:Token', data.acessToken);
        }

        return getCurrentUser();
           
    }


    return(
        <AuthContext.Provider value={{user, userSignIn, userSignUp,getCurrentUser}}>
            {children}
        </AuthContext.Provider>
    )

}