import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LoadingLine } from "./loadingLine";

function Header(){
    const [AreaReactApps, SetAreaReactApps] = useState(false);
    
    return(
        <HeaderStyle>
            <LoadingLine/>
            <HeaderCustom className={AreaReactApps === true ? "active" : ''}>
                <PrimaryHeader>
                    <LeftComponents>
                        <Link to="/">
                            <img src="/logo.png" alt="siteLogo" />
                        </Link>
                        <ButtonViewApps onClick={() => {
                            if(!AreaReactApps){
                                SetAreaReactApps(true);
                            }else{
                                SetAreaReactApps(false);
                            }
                        }}>
                            React Native
                            <svg className={AreaReactApps === false ? '' : 'active'} xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" viewBox="0 0 330 330">
                                <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
                            </svg>
                        </ButtonViewApps>
                    </LeftComponents>
                    <AViewApps target="_blank" href='https://www.linkedin.com/'>Linkedin</AViewApps>
                </PrimaryHeader>
                <AppsReact/>
            </HeaderCustom>
        </HeaderStyle>
    )
}

function AppsReact(){
    return(
        <AppsReactDiv>
            <UlReactApp>
                <LiReactApp>
                    <Link to="/app">
                        <AppImgReactApp/>
                        <AppInfosReactApp>
                            <h1>MangaSharp</h1>
                            <span>Description</span>
                            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae officia at quod ipsa placeat, voluptatibus, aperiam iste facere omnis aliquid, eaque delectus sit ex itaque fuga laudantium est suscipit voluptatem!</span>
                        </AppInfosReactApp>
                    </Link>
                    <TagASocialMediaReactApp target="_blank" href='https://github.com/Lullka/mangaSharp'><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="githubLogo" /></TagASocialMediaReactApp>
                </LiReactApp>
                <LiReactApp>
                    <Link to="/app">
                        <AppImgReactApp/>
                        <AppInfosReactApp>
                            <h1>MangaSharp</h1>
                            <span>Description</span>
                            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae officia at quod ipsa placeat, voluptatibus, aperiam iste facere omnis aliquid, eaque delectus sit ex itaque fuga laudantium est suscipit voluptatem!</span>
                        </AppInfosReactApp>
                    </Link>
                    <TagASocialMediaReactApp target="_blank" href='https://github.com/Lullka/mangaSharp'><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="githubLogo" /></TagASocialMediaReactApp>
                </LiReactApp>
            </UlReactApp>
        </AppsReactDiv>
    )
}


const HeaderStyle = styled.header`
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 2;
`;

const HeaderCustom = styled.div`
    position: fixed;
    width: 100%;
    height: 80px;
    overflow: hidden;
    transition: 100ms;
    border: 1px solid #191919;
    border-style: none none solid none;

    &.active{
        height: calc(80px + 400px);
        border: 2px solid #FFF;
        border-style: none none solid none;
        transition: 600ms;
    }

    &.active div:nth-child(1){
        border-color: #FFF;
    }

    @media screen and (max-width: 710px){
        &.active{
            min-height: 80px;
            border: 2px solid #FFF;
            border-style: none none solid none;
        }

        &.active{
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
    }
`;

const PrimaryHeader = styled.div`
    width: 100%;
    min-height: 80px;
    backdrop-filter: blur(25px);
    background-color: rgba(0,0,0,.85);
    padding: 0 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 2px solid transparent;
    border-style: none none solid none;
    transition: 200ms;

    a img{
        width: 60px;
        margin-right: 50px
    }
`;

const LeftComponents = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;
const ButtonViewApps = styled.button`
    display: flex;
    color: #fff;
    background-color: transparent;
    border: 2px solid #FFF;
    border-radius: 2px;
    padding: 5px 8px;
    cursor: pointer;
    font-weight: 600;
    font-size: 17px;
    gap: 5px;
    align-items: center;
    user-select: none;

    div{
        height: 17px;
    }

    svg{
        width: 15px;
        height: 15px;
        fill: #fff;
        stroke-width: 2;
        transition: 0.5s;
    }

    svg.active{
        transform: rotate(180deg);
        fill: #fff;
    }
`;
const AViewApps = styled.a`
    border-radius: 4px;
    background-color: #FCAF17;
    /* background: linear-gradient(90deg, #e66465, #9198e5); */
    padding: 8px 15px;
    color: #FFF;
    font-weight: bold;
    font-size: 17px;
    transition: 0.5s;
    border: 1px solid transparent;

    &:hover{
        border-color: #FFF;
    }
`;

/* CardsAppReact */

const AppsReactDiv = styled.div`
    width: 100%;
    height: 400px;
    backdrop-filter: blur(25px);
    background-color: rgb(18, 18, 18, 0.98);
    position: absolute;
    top: 80px;
    border: 2px solid #FFF;
    border-style: none none solid none;
    display: flex;
    align-items: center;
    padding: 0 0 0 40px;
    
    @media screen and (max-width: 710px){
        padding: 0;
        border: none;
        display: block;

        &:after{
            content: '';
            width: 100%;
            height: 25px;
            background: linear-gradient(180deg, transparent, black);
            position: absolute;
            bottom: 0;
            z-index: 2;
        }
    }
`;

const UlReactApp = styled.ul`
    list-style: none;
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    display: flex;
    flex-wrap: nowrap;
    gap: 40px;
    justify-content: center;

    &:not(overflow-x: scroll){
        padding-top: 10px;
    }
    
    &::-webkit-scrollbar{
        height: 0px;
        width: 10px;
    }

    &::-webkit-scrollbar-track{
        background-color: transparent;
        width: 10px;
    }

    &::-webkit-scrollbar-thumb{
        background-color: #2d2d2d;
        border-radius: 25px;
    }

    @media screen and (max-width: 710px){
        justify-content: flex-start;
        flex-direction: column;
        align-items: center;
        padding: 10px 0 20px 10px;
        gap: 20px;
        height: 100%;
        overflow: scroll;
    }

    @media screen and (max-width: 550px){
        padding-top: 10px;
        gap: 15px;
    }
`;

const LiReactApp = styled.li`
    min-width: 183px;
    min-height: 350px;
    max-width: 183px;
    background-color: #121212;
    display: flex;
    overflow: hidden;
    border-radius: 10px;
    border: 2px solid #FCAF17;
    -webkit-box-shadow: 10px 10px 39px 0px rgba(0,0,0,0.95);
    -moz-box-shadow: 10px 10px 39px 0px rgba(0,0,0,0.95);
    box-shadow: 10px 10px 39px 0px rgba(0,0,0,0.95);
    position: relative;
    transition: 500ms;
    transition-delay: 100ms;

    &:hover{
        z-index: 1;
        min-width: 550px;
        max-width: 550px;
        transition-delay: 300ms;
        margin-right: -367px;
    }

    &:hover &:not(:hover){
        z-index: 0;
    }

    /* &:hover &:not(:hover){
        margin-left: -100px;
    } */

    a{
        display: flex;
    }

    &:hover a:nth-child(2){
        transition-delay: 400ms;
        pointer-events: all;
        opacity: 1;
    }

    @media screen and (max-width: 710px){
        min-height: 255px;
        max-height: 100%;
        min-width: 0px;
        max-width: 100%;
        height: 260px;
        z-index: 1;

        &:hover{
            min-width: 0px;
            max-width: 100%;
            margin-right: 0px;
        }
    }

    @media screen and (max-width: 550px){
        min-height: 360px;
        height: 100%;
        width: 191px;
        

        a{
            flex-direction: column;
            width: 100%;
        }
    }
`;

const AppImgReactApp = styled.div`
    min-width: 183px;
    height: 100%;
    background: url(${'/testeFoto.jpg'}) no-repeat 0/contain;
    transition: 0s;

    @media screen and (max-width: 710px){
        min-width: 135px;
        transition: 0s;
    }

    @media screen and (max-width: 550px){
        height: 560px;
        width: 100%;
    }
`;

const AppInfosReactApp = styled.div`
    width: 366px;
    padding: 10px;
    color: #FFF;
    display: flex;
    flex-direction: column;
    z-index: 2;
    background-color: #121212;

    h1{
        border: 2px solid #FCAF17;
        padding-left: 6px;
        border-style: none none none solid;
    }

    span:nth-child(2){
        font-size: 19px;
        font-weight: 500;
        margin-top: 20px;
        
    }

    span:nth-child(3){
        margin-top: 10px;
    }

    @media screen and (max-width: 710px){
        h1{
            font-size: 26px;
        }

        span{
            font-size: 15px;
        }
    }

    @media screen and (max-width: 550px){
        display: none;
    }
`;

const TagASocialMediaReactApp = styled.a`
    position: absolute;
    width: 45px;
    height: 45px;
    bottom: 10px;
    right: 10px;
    overflow: hidden;
    border-radius: 50%;
    transition: 400ms;
    pointer-events: none;
    opacity: 0;

    &:hover{
        transform: scale(1.1);
    }

    @media screen and (max-width: 710px){
        opacity: 1;
    }

    @media screen and (max-width: 550px){
        max-width: 30px;
        height: 30px;
    }
`;

export default Header;