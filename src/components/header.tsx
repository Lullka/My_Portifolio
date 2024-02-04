import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Header(){
    return(
        <HeaderStyle>
            <Nav>
                <Link tabIndex={1} to={'/'}>
                    <img src="/primeiralogo.svg" alt="siteLogo" />
                </Link>
                <RightCorner>
                    <UlNavItems>
                        <LiNavItems>
                            <a tabIndex={2} href="#apresentacao">Apresentação</a>
                        </LiNavItems>
                        <LiNavItems>
                            <Link tabIndex={3} to={'?mdl='}>Sobre mim</Link>
                        </LiNavItems>
                        <LiNavItems>
                            <Link tabIndex={4} to={'#habilidades'}>Minhas Habilidades</Link>
                        </LiNavItems>
                    </UlNavItems>
                </RightCorner>
            </Nav>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.header`
    width: 100%;
    top: 0;
    position: fixed;
    z-index: 2;
`;

const Nav = styled.nav`
    width: 100%;
    height: 60px;
    background-color: #0B0B0B;
    backdrop-filter: blur(25px);
    display: flex;
    padding: 0 30px 0 50px;
    align-items: center;
    justify-content: space-between;

    a{
        width: 45px;
        height: 45px;
    }

    a img{
        width: 100%;
    }
`;

const RightCorner = styled.div`

`;

const UlNavItems = styled.ol`
    color: rgb(137, 64, 255);
    font-weight: bold;
    display: flex;
    gap: 35px;
`;

const LiNavItems = styled.li`
    a{
        color: #FFF;
        font-weight: 500;
    }
`;

export default Header;