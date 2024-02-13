//import { Link } from "react-router-dom";
import styled from "styled-components";
import {Helmet} from "react-helmet";
import Presentation from "../components/presentation";
import Skills from "../components/containerSkills";
import Header from "../components/header";
import LoadingScreen from "../components/loadingScreen";

export function Browse(){
    return(  
        <>
            <LoadingScreen/>    
            <Header/>
            <WhoIAm>
                <Helmet>
                    <title>Browse</title>
                </Helmet>
                <Presentation/>
                <Skills/>
            </WhoIAm>
        </>
    );
}

const WhoIAm = styled.div`
    width: 100%;
`;