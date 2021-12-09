import { Wrapper, Background, InputContainer, ButtonContainer } from "./styles";
import Card from "../../components/Card";

import background from '../../assets/background.jpg';
import logo from '../../assets/logo.png';
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";

const Signup= ()=>{

    const navigate = useNavigate();
    const handleToSignUp =() => {
        navigate('/dashboard');
    }
    return(
        <Wrapper>
            <Background image={background} />
            <Card width="403px">
             <img src={logo} width={172} height={51} alt="logo inter" />
             <InputContainer>
             <Input placeholder="NOME"/>
             <Input placeholder="SOBRENOME"/>
             <Input placeholder="E-MAIL"/>
             <Input placeholder="SENHA" type="password"/>
             <Input placeholder="CONFIRMAR SENHA" type="password"/>
             </InputContainer>
             <ButtonContainer>
                 <Button type="button" onClick={handleToSignUp}>
                     Entrar
                 </Button>
             </ButtonContainer>
             <p>Já tem uma conta? <Link to="/">Entre já</Link> </p>

            </Card>
        </Wrapper>
    )
}

export default Signup;