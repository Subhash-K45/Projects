import axios from 'axios'
import { useState,useEffect } from 'react';

const OverView = ()=>{
    const [state,setState]=useState([])
    useEffect(()=>{
        axios.get('https://zany-erin-sparrow-wear.cyclic.app/Gallery_Overview')
        .then(response=>setState(response.data))
        .catch(err=>console.log(err))
       },[]);
     return (
        <>  
            <div>
                <h1>Gallery OverView</h1>
                <p>Our gallery is home to a diverse range of artistic styles and forms. From contemporary paintings and sculptures to mixed media works from around the world, there's something for everyone.</p>
            </div>
           
            <div className="Contemporary">
                <img src="." alt="Contemporary Image"/>
                <h2>Contemporary Pintings</h2>
                <p>Experience color, dimension, and innovation.</p>
            </div>
            <div className="Sculputures">
                <img src="" alt="Sculputures"/>
                <h2>Sculptures</h2>
                <p>Discover unusual forms and exciting abstractions.</p>
            </div>
            <div className="Mixed_Art">
                <img src="" alt="Mixed_Art"/>
                <h2>Mixed Media Works</h2>
                <p>Explore new materials and unexpected combinations.</p>
            </div>
        </>
     )
}

export default OverView