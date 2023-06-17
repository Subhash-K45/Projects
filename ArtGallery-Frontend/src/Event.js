import axios, { Axios } from "axios"
import  {useEffect,useState} from "react"
const Event = () =>{
    const [state,setState]=useState()
    useEffect(()=>{
       // axios.get("https://pear-cooperative-gazelle.cyclic.app/Creater/Event",).then(response=>console.log(response.data))
    },[])
    return(
        <div className="Event-Message-Box">
            <div className="Event-Box-Headings">
                <h2>Upcoming Events</h2>
                <p>Stay up to date on our current events.</p>
            </div>
            <div className="Event-Box-Content">
                <div className="Event1">
                    
                </div>
                <div className="Event1">

                </div>
                <div className="Event1">

                </div>
            </div>
        </div>
    )
}


export default Event