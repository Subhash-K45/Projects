import { useState ,useEffect} from 'react'
import axios from 'axios'
import './Nav-Bar-Component.css'
import Nav from '../Nav'
const Home=()=>{
    const [state,setState]=useState([])
   useEffect(()=>{
       axios.get('https://zany-erin-sparrow-wear.cyclic.app/Gallery_Overview')
       .then(response=>setState(response.data))
       .catch(err=>console.log(err))
    },[]);
    return(
        <div className="Main-Page">
            <div className="Home">
                <nav>
                    <Nav/>
                </nav>
                <div className="Welcome-message">
                    <div className="Content">
                        <div className="Heading">
                            Welcome to Our Art Gallery
                        </div>
                        <p className="Heading-description">
                            Discover extraordinary exhibits, view stunning pieces in our permanent collection, 
                            and participate in engaging events. Experience the art.
                        </p>
                    </div>
                </div>
            </div>
            <div className="Gallery-Overview">
                <div className="categories">
                    {state}
                </div>
            </div>
    </div>
    )
}
export default Home