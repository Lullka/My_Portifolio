import { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';

export function LoadingLine(){
    const backLine = useRef();
    const line = useRef();

    useLayoutEffect(() => {
        backLine.current.classList.add('loading');
        setTimeout(() => {
            line.current.style.width = '100%';
            setTimeout(() => {
                backLine.current.style.height = '0px';
                setInterval(() => {
                    backLine.current.classList.remove('loading');
                }, 100)
            }, 100)
        }, 1750)
    });

    return(
        <LineStyle ref={backLine}>
            <Line ref={line}/>
        </LineStyle>
    )
}

const LineStyle = styled.div`
    width: 100%;
    height: 0px;
    background-color: #2d2d2d;
    transition: 200ms;
    overflow: hidden;
    z-index: 4;

    &.loading{
        height: 5px;
        animation: loadingBack 0.3s linear;
        animation-delay: 1800ms;
    }

    &.loading div{
        animation: loadingBar 1.5s ease-in-out;
        animation-delay: 300ms;
    }
    
    @keyframes loadingBar{
        0%{
            width: 0px;
        }
        25%{
            width: 50px;
        }
        80%{
            width: 100%;
        }
        100%{
            width: 100%;
        }
    }

    @keyframes loadingBack{
        from{
            height: 5px;
        }
        to{
            height: 0px;
        }
    }
    `;
    
const Line = styled.div`
    width: 0px;
    height: 100%;
    transition: 1s;
    background: linear-gradient(90deg, #e66465, #9198e5);

`;