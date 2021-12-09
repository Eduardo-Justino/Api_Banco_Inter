import { HeaderContainer, HeaderWrapper, UserInfo  } from "./styles";
import logo from '../../assets/logo.png';
import UserCircle from "../UserCircle";
import {useNavigate} from 'react-router-dom'



const Header = () => {

    const navigate = useNavigate();

    const handleLogoff = () => {
        navigate('/')
    }

    return (
        <HeaderContainer>
            <HeaderWrapper>
                <img src={logo} width={172} height={61} alt="logo" />
                <UserInfo>
                   <UserCircle initials="EJ"></UserCircle>
                    <div>
                        <p> ola. <span className="#FB6910 font-bold">Eduardo</span></p>
                        <strong>15751151-9</strong> <br/>
                        <a href="#" onClick={handleLogoff}>Sair</a>
                    </div>
                </UserInfo>
            </HeaderWrapper>
        </HeaderContainer>


    )
  

}

export default Header
