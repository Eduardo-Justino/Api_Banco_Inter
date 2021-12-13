import { HeaderContainer, HeaderWrapper, UserInfo  } from "./styles";
import logo from '../../assets/logo.png';
import UserCircle from "../UserCircle";
import {useNavigate} from 'react-router-dom'
import useAuth from "../../hooks/useAuth";



const Header = () => {

    const navigate = useNavigate();
    const {user} = useAuth();
    const initials = user.firstName.substr(0,1)+user.lastName.substr(0,1)

    const handleLogoff = () => {
        navigate('/')
    }

    return (
        <HeaderContainer>
            <HeaderWrapper>
                <img src={logo} width={172} height={61} alt="logo" />
                <UserInfo>
                   <UserCircle initials={initials}></UserCircle>
                    <div>
                        <p> ola. <span className="#FB6910 font-bold">{user.firstName} {user.lastName}</span></p>
                        <strong>{user.accountNumber}-{user.accountDigit}</strong> <br/>
                        <a href="#" onClick={handleLogoff}>Sair</a>
                    </div>
                </UserInfo>
            </HeaderWrapper>
        </HeaderContainer>


    )
  

}

export default Header
