import { useParams } from "react-router-dom";
import styled from "styled-components"
import { Helmet } from "react-helmet";
import { useEffect, useRef, useState } from "react";
import Header from "../components/header";

export function Video(){
    const [videoAudio, setVideoAudio] = useState('unmuted');
    const [videoFullScreen, setVideoFullScreen] = useState('offFullscreen');
    const [autoPlayVideo, setAutoPlayVideo] = useState(localStorage.getItem('autoPlayVideo'));
    const [statusVideoPlay, setStatusVideoPlay] = useState('paused');

    const {id} = useParams()
    console.log(id);

    const VideoPlayer = useRef();
    const videoContainerFullScreeenFunction = useRef();

    useEffect(() => {
        if(localStorage.getItem('statusAudio') === 'muted'){
            setVideoAudio('muted');
            VideoPlayer.current.volume = 0;
        }else{
            VideoPlayer.current.volume = 1;
        }
        
        if(autoPlayVideo === null || autoPlayVideo === 'autoplay'){
            localStorage.setItem('autoPlayVideo', 'autoplay');
            setStatusVideoPlay('played');
            VideoPlayer.current.autoplay = true;
        }
    }, [])

    return(
        <>
            <Header/>
            <Container>
                <Helmet>
                    <title>Assistindo à {id}</title>
                </Helmet>
                <VideoContainer>
                    <JustForScreeenFunction ref={videoContainerFullScreeenFunction}>
                        <video 
                            autoPlay
                            ref={VideoPlayer} 
                            poster="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXwLOR_5lLZg_etnIhlq0c8Oh071bXssjxtw&usqp=CAU" 
                            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4">    
                            Seu browser não é compatível com este formato de vídeo
                        </video>
                        <ContaierContents>
                            <TopContents>
                                <img src="/age16.svg" alt="" />
                                <ULVideoInfo>
                                    <LIVideoInfo>VideoPlayer <span>própio</span></LIVideoInfo>
                                </ULVideoInfo>
                            </TopContents>
                            <Controls>
                                <TopControls>
                                    <button onClick={() => {
                                        if(videoAudio === 'unmuted'){
                                            setVideoAudio('muted');
                                            localStorage.setItem('statusAudio', 'muted');
                                            VideoPlayer.current.volume = 0;
                                        }else{
                                            setVideoAudio('unmuted');
                                            localStorage.setItem('statusAudio', 'unmuted');
                                            VideoPlayer.current.volume = 1;
                                        }
                                    }}>
                                        {
                                            videoAudio === 'unmuted' ?
                                            <svg fill="#000000" width="800px" height="800px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1129.432 113v1694.148H903.545l-451.772-451.773V564.773L903.545 113h225.887Zm542.545 248.057C1832.017 521.097 1920 733.882 1920 960.107c0 226.226-87.983 438.898-248.023 598.938l-79.851-79.85c138.694-138.582 214.93-323.018 214.93-519.087 0-196.183-76.236-380.506-214.93-519.2ZM338.83 564.773v790.602H169.415C75.672 1355.375 0 1279.703 0 1185.96V734.187c0-93.742 75.672-169.414 169.415-169.414H338.83Zm1093.922 36.085c95.776 97.018 148.407 224.644 148.407 359.16 0 134.628-52.631 262.253-148.407 359.272l-80.303-79.174c74.656-75.897 115.767-175.4 115.767-280.099 0-104.585-41.111-204.088-115.767-279.986Z" fillRule="evenodd"/>
                                            </svg>
                                            :
                                            <svg fill="#000000" width="800px" height="800px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1129.433 113v1694.15H903.547l-451.774-451.773V564.773L903.547 113h225.886ZM338.83 564.773v790.604H169.415c-92.806 0-167.9-74.166-169.392-166.609L0 1185.962V734.188c0-92.805 74.166-167.9 166.608-169.392l2.807-.023H338.83ZM1789.951 635 1920 764.926 1724.988 959.94 1920 1154.95 1789.951 1285l-194.89-195.012L1400.05 1285 1270 1154.951l195.012-195.012L1270 764.926 1400.049 635l195.012 195.012L1789.951 635Z" fillRule="evenodd"/>
                                            </svg>
                                        }
                                    </button>
                                    <QualityControls>
                                        <button>
                                            <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 340.274 340.274" xmlSpace="preserve">
                                                <g><g><g>
                                                            <path d="M293.629,127.806l-5.795-13.739c19.846-44.856,18.53-46.189,14.676-50.08l-25.353-24.77l-2.516-2.12h-2.937
                                                                c-1.549,0-6.173,0-44.712,17.48l-14.184-5.719c-18.332-45.444-20.212-45.444-25.58-45.444h-35.765
                                                                c-5.362,0-7.446-0.006-24.448,45.606l-14.123,5.734C86.848,43.757,71.574,38.19,67.452,38.19l-3.381,0.105L36.801,65.032
                                                                c-4.138,3.891-5.582,5.263,15.402,49.425l-5.774,13.691C0,146.097,0,147.838,0,153.33v35.068c0,5.501,0,7.44,46.585,24.127
                                                                l5.773,13.667c-19.843,44.832-18.51,46.178-14.655,50.032l25.353,24.8l2.522,2.168h2.951c1.525,0,6.092,0,44.685-17.516
                                                                l14.159,5.758c18.335,45.438,20.218,45.427,25.598,45.427h35.771c5.47,0,7.41,0,24.463-45.589l14.195-5.74
                                                                c26.014,11,41.253,16.585,45.349,16.585l3.404-0.096l27.479-26.901c3.909-3.945,5.278-5.309-15.589-49.288l5.734-13.702
                                                                c46.496-17.967,46.496-19.853,46.496-25.221v-35.029C340.268,146.361,340.268,144.434,293.629,127.806z M170.128,228.474
                                                                c-32.798,0-59.504-26.187-59.504-58.364c0-32.153,26.707-58.315,59.504-58.315c32.78,0,59.43,26.168,59.43,58.315
                                                                C229.552,202.287,202.902,228.474,170.128,228.474z"/>
                                                </g></g></g>
                                            </svg>
                                        </button>
                                        <button onClick={() => {
                                            if(videoFullScreen === 'onFullScreen'){
                                                setVideoFullScreen('offFullScreen');
                                                document.exitFullscreen();
                                            }else{
                                                setVideoFullScreen('onFullScreen');
                                                videoContainerFullScreeenFunction.current.requestFullscreen();
                                            }
                                        }}>
                                            {videoFullScreen === 'onFullScreen' ? 
                                                <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M21.7071 3.70711L16.4142 9H20C20.5523 9 21 9.44772 21 10C21 10.5523 20.5523 11 20 11H14.0007L13.997 11C13.743 10.9992 13.4892 10.9023 13.295 10.7092L13.2908 10.705C13.196 10.6096 13.1243 10.4999 13.0759 10.3828C13.0273 10.2657 13.0004 10.1375 13 10.003L13 10V4C13 3.44772 13.4477 3 14 3C14.5523 3 15 3.44772 15 4V7.58579L20.2929 2.29289C20.6834 1.90237 21.3166 1.90237 21.7071 2.29289C22.0976 2.68342 22.0976 3.31658 21.7071 3.70711Z"/>
                                                    <path d="M9 20C9 20.5523 9.44772 21 10 21C10.5523 21 11 20.5523 11 20V14.0007C11 13.9997 11 13.998 11 13.997C10.9992 13.7231 10.8883 13.4752 10.7092 13.295C10.7078 13.2936 10.7064 13.2922 10.705 13.2908C10.6096 13.196 10.4999 13.1243 10.3828 13.0759C10.2657 13.0273 10.1375 13.0004 10.003 13C10.002 13 10.001 13 10 13H4C3.44772 13 3 13.4477 3 14C3 14.5523 3.44772 15 4 15H7.58579L2.29289 20.2929C1.90237 20.6834 1.90237 21.3166 2.29289 21.7071C2.68342 22.0976 3.31658 22.0976 3.70711 21.7071L9 16.4142V20Z"/>
                                                </svg>
                                                :
                                                <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M21.7092 2.29502C21.8041 2.3904 21.8757 2.50014 21.9241 2.61722C21.9727 2.73425 21.9996 2.8625 22 2.997L22 3V9C22 9.55228 21.5523 10 21 10C20.4477 10 20 9.55228 20 9V5.41421L14.7071 10.7071C14.3166 11.0976 13.6834 11.0976 13.2929 10.7071C12.9024 10.3166 12.9024 9.68342 13.2929 9.29289L18.5858 4H15C14.4477 4 14 3.55228 14 3C14 2.44772 14.4477 2 15 2H20.9998C21.2749 2 21.5242 2.11106 21.705 2.29078L21.7092 2.29502Z"/>
                                                    <path d="M10.7071 14.7071L5.41421 20H9C9.55228 20 10 20.4477 10 21C10 21.5523 9.55228 22 9 22H3.00069L2.997 22C2.74301 21.9992 2.48924 21.9023 2.29502 21.7092L2.29078 21.705C2.19595 21.6096 2.12432 21.4999 2.07588 21.3828C2.02699 21.2649 2 21.1356 2 21V15C2 14.4477 2.44772 14 3 14C3.55228 14 4 14.4477 4 15V18.5858L9.29289 13.2929C9.68342 12.9024 10.3166 12.9024 10.7071 13.2929C11.0976 13.6834 11.0976 14.3166 10.7071 14.7071Z"/>
                                                </svg>
                                            }
                                        </button>
                                    </QualityControls>
                                </TopControls>
                                <CenterControls>
                                    <button onClick={() => {
                                        VideoPlayer.current.currentTime -= 10;
                                    }}>
                                        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.54004 15.92V10.5801L8.04004 12.2501" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M10.02 4.46997L12 2" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M4.91 7.79999C3.8 9.27999 3.10999 11.11 3.10999 13.11C3.10999 18.02 7.09 22 12 22C16.91 22 20.89 18.02 20.89 13.11C20.89 8.19999 16.91 4.21997 12 4.21997C11.32 4.21997 10.66 4.31002 10.02 4.46002" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M14 10.5801C15.1 10.5801 16 11.4801 16 12.5801V13.9301C16 15.0301 15.1 15.9301 14 15.9301C12.9 15.9301 12 15.0301 12 13.9301V12.5801C12 11.4701 12.9 10.5801 14 10.5801Z" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                    <button onClick={() => {
                                        if(statusVideoPlay === 'played'){
                                            setStatusVideoPlay('paused');
                                            VideoPlayer.current.pause();
                                        }else{
                                            setStatusVideoPlay('played');
                                            VideoPlayer.current.play();
                                        }
                                    }}>
                                        {
                                            statusVideoPlay === 'played' ?
                                            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 5V19M16 5V19" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            :
                                            <svg width="800px" height="800px" viewBox="-0.5 0 7 7" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                    <g id="Dribbble-Light-Preview" transform="translate(-347.000000, -3766.000000)" fill="#fff">
                                                        <g id="icons" transform="translate(56.000000, 160.000000)">
                                                            <path d="M296.494737,3608.57322 L292.500752,3606.14219 C291.83208,3605.73542 291,3606.25002 291,3607.06891 L291,3611.93095 C291,3612.7509 291.83208,3613.26444 292.500752,3612.85767 L296.494737,3610.42771 C297.168421,3610.01774 297.168421,3608.98319 296.494737,3608.57322" id="play-[#1003]">
                                                            </path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        }
                                    </button>
                                    <button onClick={() => {
                                        VideoPlayer.current.currentTime += 10;
                                    }}>
                                        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.98 4.46997L12 2" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M19.0899 7.79999C20.1999 9.27999 20.8899 11.11 20.8899 13.11C20.8899 18.02 16.9099 22 11.9999 22C7.08988 22 3.10986 18.02 3.10986 13.11C3.10986 8.19999 7.08988 4.21997 11.9999 4.21997C12.6799 4.21997 13.3399 4.31002 13.9799 4.46002" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M9.54004 15.92V10.5801L8.04004 12.2501" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M14 10.5801C15.1 10.5801 16 11.4801 16 12.5801V13.9301C16 15.0301 15.1 15.9301 14 15.9301C12.9 15.9301 12 15.0301 12 13.9301V12.5801C12 11.4701 12.9 10.5801 14 10.5801Z" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                </CenterControls>
                                <BottomControls>

                                </BottomControls>
                            </Controls>
                        </ContaierContents>
                    </JustForScreeenFunction>
                </VideoContainer>
                <h1 style={{color: 'white', fontSize: 40, margin: 30, textTransform: 'uppercase'}}>{id}</h1>
            </Container>
        </>
    )
}

const Container = styled.section`
    padding-top: 60px;
    width: 100%;
    height: 100vh;
    background-color: #000; /* #0e0e0e */
`;

const VideoContainer = styled.div`
    width: 100%;
    background-color: #000;
    position: relative;
    height: calc(100vh - 15.625rem);
    max-height: calc(100vh - 15.625rem);
`;
    
const JustForScreeenFunction = styled.div`
    width: 100%;
    height: 100%;

    video{
        width: 100%;
        height: 100%;
    }
`;

const ContaierContents = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
`;

const TopContents = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 50px;
    background-image: linear-gradient(rgb(20, 21, 25), rgba(20, 21, 25, 0));
    padding: 40px 35px;
    gap: 20px;
    display: flex;
    align-items: center;
    user-select: none;
    pointer-events: none;

    img{
        width: 52px;
    }

    display: none;
`;

const ULVideoInfo = styled.ul`
    list-style: none;
    display: flex;
`;

const LIVideoInfo = styled.li`
    color: rgba(102, 16, 242,1);
    font-size: 17px;
    font-weight: 700;

    span{
        color: #FFF;
    }
`;

const Controls = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const TopControls = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;

    button{
        width: 2rem;
        height: 2rem;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    svg{
        width: 100%;
        height: 100%;
        fill: #FFF;
    }
`;

const QualityControls = styled.div`
    display: flex;
    gap: 13px;
`;
const CenterControls = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 40px;
    transition: 1s;

    button{
        width: 4.5rem;
        height: 4.5rem;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    svg{
        width: 100%;
        height: 100%;
    }
`;

const BottomControls = styled.div`
    width: 100%;
    height: 50px;
`;