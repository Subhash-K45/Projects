import { useEffect,useState } from "react"
import axios from "axios"
const Contemporary=()=>{
    const [state,setState]=useState()
    const [loading,setLoading]=useState(true)    
    useEffect(()=>{
        axios.get("https://zany-erin-sparrow-wear.cyclic.app/Contemporary_Paintings")
        .then(response=>{
            setState(response.data)
            setLoading(false)
        })
        
    },[])
    return(
        <div className="Contemporary">
            <div className="Gallery-Overview-Blur-Box"></div>
            <div className="Contemporary-item-Box">
                {console.log(state)}
                {loading? 'Loading ...':state.map(({id,img,price,artist,description,name})=>
                (
                    <div key={id}>
                        <img src={img} alt={name}/>
                        <p>{name}</p>
                        <p>{description}</p>
                        <p>Author:{artist}</p>
                        <p>price:{price}</p>
                    </div>
                )
                )}
            </div>
        </div>
    )
}
export default Contemporary