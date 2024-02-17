import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/header";
import { Helmet } from "react-helmet";

export function Page404(){
    return(
        <>
            <Helmet>
                <title>Ops, página não encontrada</title>
            </Helmet>
            <Header/>
            <Container>
                <Contents>
                    <h1>404</h1>
                    <p>Estamos navegando por espaços inexploradas...</p>
                    <Link to="/">Terra</Link>
                    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4V20M12 4L8 8M12 4L16 8" stroke="#8830d8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <img src="/jupiter404.png" alt="Jupiter" />
                </Contents>
            </Container>
        </>
    );
}

const Container = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Contents = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    user-select: none;
    transition: 1s;

    h1{
        font-size: 16rem;
        color: #FFF;
        text-shadow: 10px 5px 80px rgba(131, 71, 230, 0.5);
    }

    p{
        font-size: 1.5em;
        color: #FFF;
        text-shadow: 0px 5px 80px rgba(255, 255, 255, 0.5);
    }

    a{
        color: #FFF;
        font-size: 1.2em;
        font-weight: bold;
        background-color: #8830d8;
        padding: 10px 15px;
        border-radius: 10px;
        margin-top: 25px;
        box-shadow: 10px 10px 80px 0px rgba(131, 71, 230, 0.5);
    }

    svg{
        position: absolute;
        width: 80px;
        height: 80px;
        bottom: -80px;
        transition: 0.8s;
    }

    a:hover ~ svg{
        bottom: -100px;
    }

    img{
        position: absolute;
        top: -80px;
        right: -90px;
        width: 300px;
        height: 300px;
        animation: floating 2s ease-in infinite;
        transiton: 2s;
    }

    @keyframes floating{
        to{
            top: -90px;
            right: -70px;
        }
    }

    @media screen and (max-width: 640px){
        h1{
            font-size: 12em;
        }

        p{
            font-size: 1.2em;
        }

        img{
            width: 200px;
            height: 200px;
            top: -60px;
            right: -60px;
        }

        @keyframes floating{
            to{
                top: -70px;
                right: -40px;
            }
        }
    }

    @media screen and (max-width: 515px){
        h1{
            font-size: 10em;
        }

        p{
            font-size: 0.9em;
        }

        img{
            width: 110px;
            height: 110px;
            top: -10px;
            right: -40px;
        }

        @keyframes floating{
            to{
                top: -20px;
                right: -10px;
            }
        }
    }

    @media screen and (max-width: 380px){
        h1{
            font-size: 9em;
        }

        p{
            font-size: 0.7em;
        }
    }
`;