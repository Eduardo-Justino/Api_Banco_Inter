import { Wrapper, Background, InputContainer, ButtonContainer } from "./styles";
import Card from "../../components/Card";

import background from '../../assets/background.jpg';
import logo from '../../assets/logo.png';
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";

const Signin = () =>{

    const navigate = useNavigate();
    const handleToSignIn =() => {
        navigate('/dashboard');
    }
    return(
        <Wrapper>
            <Background image={background} />
            <Card width="403px">
             <img src={logo} width={172} height={51} alt="logo inter" />
             <InputContainer>
             <Input placeholder="E-mail"/>
             <Input placeholder="Senha" type="password"/>
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