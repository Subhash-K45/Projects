import { useEffect,useState } from "react"
import axios from "axios"
const Mixed_Art=()=>{
    const [state,setState]=useState()
    const [loading,setLoading]=useState(true)    
    useEffect(()=>{
        axios.get("https://zany-erin-sparrow-wear.cyclic.app/Mixed_Image")
        .then(response=>{
        setState(response.data)
        setLoading(false)
        })
        
    },[])
    return(
        <div className="Mixed_Art">
            <div className="Gallery-Overview-Blur-Box"></div>
            <div className="Mixed_Art-item-Box">
                {console.log(state)}
                {loading? 'Loading ...':state.map(({id,img,price,artist,description,name})=>
                (
                    <div key={id}>
                        <img src={img} alt={name}/>
                        <p>{name}</p>
                        <p>{description}</p>
                        <p>Artist:{artist}</p>
                        <p>price:{price}</p>
                    </div>
                )
                )}
            </div>
        </div>
    )
}
export default Mixed_Art