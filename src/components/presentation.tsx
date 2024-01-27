import styled from "styled-components";

function Presentation(){
    /* const h1Text = useRef();

    useLayoutEffect(() => {
        h1Text.current.style.display = "none";
        setTimeout(() => {
            h1Text.current.style.display = "flex"
        }, 3500)
    }); */
    
    return(
        <WorkCarroselDiv id="apresentacao">
                <H1BETA>Apresentação</H1BETA>
        </WorkCarroselDiv>
    )
}

const WorkCarroselDiv = styled.section`
    width: 100%;
    height: 720px;
    background: 
        linear-gradient(25deg,rgba(102, 16, 242,0.2) 8%,rgba(60,0,136,0) 40.5%),
        linear-gradient(336deg,rgba(111, 66, 193,.2) 8%,rgba(60,0,136,0) 40.5%);
    border: 1px solid rgba(102, 16, 242, 0.5);
    border-style: none none solid none;
    display: flex;
    align-items: center;
    padding: 0 0 55px 50px;
`;

const H1BETA = styled.div`
    color: white;
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 3px;
    user-select: none;

    /*  animation: pagaLoading 1s ease-in-out;

    @keyframes pagaLoading{
        from{
            opacity: 0;
            transform: scale(0.8);
        }
        to{
            transform: scale(1);
            opacity: 1;
        }
    } */
`;

export default Presentation