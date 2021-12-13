import { Wrapper, Background, InputContainer, ButtonContainer } from "./styles";
import Card from "../../components/Card";
import background from '../../assets/background.jpg';
import logo from '../../assets/logo.png';
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";

const Signin = () =>{

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const navigate = useNavigate();
    const {userSignIn} = useAuth();

    const handleToSignIn = async() => {
        const data = {
            email,
            password
        }
       const response = await userSignIn(data);
       if (response.id){
            navigate('/dashboard');
            return
       }

       alert('usuario ou senha invalidos')

       
    }
    return(
        <Wrapper>
            <Background image={background} />
            <Card width="403px">
             <img src={logo} width={172} height={51} alt="logo inter" />
             <InputContainer>
             <Input placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
             <Input placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
             </InputContainer>
             <ButtonContainer>
                 <Button type="button" onClick={handleToSignIn}>
                     Entrar
                 </Button>
             </ButtonContainer>
             <p>Ainda não é cadastrado? <Link to="/Signup">Cadastre-se Já</Link> </p>

            </Card>
        </Wrapper>
    )
}

export default Signin;