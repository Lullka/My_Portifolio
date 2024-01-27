//import { Link } from "react-router-dom";
import styled from "styled-components";
import {Helmet} from "react-helmet";
import Presentation from "./presentation";
import Skills from "./containerSkills";

export function Browse(){
    return(  
        <WhoIAm>
            <Helmet>
                <title>Browse</title>
            </Helmet>
            <Presentation/>
            <Skills/>
        </WhoIAm>
    );
}

const WhoIAm = styled.div`
    width: 100%;
`;