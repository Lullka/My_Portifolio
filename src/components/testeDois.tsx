import { Link } from "react-router-dom"

export function Ola(){
    return(  
        <div className="oi">
                <h1 style={{color: 'white'}}>Ola</h1>
                <video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" controls></video>
            <Link to={`/`}>
                <h1 style={{color: 'white'}}>Voltar</h1>
            </Link>
        </div>
    )
}