import { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

function LoadingScreen(){
    const container = useRef();
    const contents = useRef();

    useLayoutEffect(() => {
        contents.current.classList.add('exiting');
        setTimeout(() => {
            contents.current.style.display = 'none';
            container.current.style.opacity = '0';
            container.current.style.pointerEvents = 'none';
            setTimeout(() => {
                container.current.style.display = 'none';
            }, 1000)
        },2880)
    })
    return(
        <Container ref={container}>
            <Contents ref={contents}>
                <BoxLogo/>
                <img src="/primeiralogo.svg" alt="siteLogo" />
            </Contents>
        </Container>
    );
}

const Container = styled.div`
    transition: 0.2s;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 5;
    background-color: #0B0B0B;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
`;
    
const Contents = styled.div`
    position: relative;

    &.exiting{
        animation: exiting 0.88s ease-in-out;
        animation-delay: 2s;
    }

    @keyframes exiting{
        to{
            transform: scale(0.2);
            opacity: 0;
        }
    }
    img{
        height: 130px;
        width: 130px;
        position: absolute;
        left: 57%;
        top: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
    }
`;

const BoxLogo = styled.div`
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #FFF;
    animation: boxLogoRotate 0.5s ease-in-out infinite;

    @keyframes boxLogoRotate{
        to{
            transform: rotate(-90deg);
        }
    }
`;
export default LoadingScreen;