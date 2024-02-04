import styled from "styled-components"
import PropTypes from 'prop-types';

function Modal(props){
    return(
        <BackGroundModal>
            <ContainerModal>
                <h1>React Native</h1>
                <H1Line/>
            </ContainerModal>
        </BackGroundModal>
    )
}

Modal.propType = {
    tecnology: PropTypes.string,
}

export default Modal;

const BackGroundModal = styled.div`
    top: 0;
    position: fixed;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 4;
`;

const ContainerModal = styled.div`
    width: 700px;
    min-height: 300px;
    max-height: 650px;
    overflow-y: scroll;
    background-color: #0B0B0B;
    border: 2px solid rgb(255, 255, 255);
    border-radius: 30px;
    padding: 35px;
    display: flex;
    flex-direction: column;

    h1{
        color: #FFF;
        font-size: 40px;
    }

    &::-webkit-scrollbar{
        width: 10px;
    }

    &::-webkit-scrollbar-track{
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb{
        background-color: #2d2d2d;
        border-radius: 25px;
    }
`;

const H1Line = styled.div`
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, rgba(102, 16, 242,1) 50%,rgba(60,0,136,0) 100%);
`;