import { useEffect,useState } from "react"
import axios from "axios"
const Sculptures=()=>{
    const [state,setState]=useState()
    const [loading,setLoading]=useState(true)    
    useEffect(()=>{
        axios.get("https://zany-erin-sparrow-wear.cyclic.app/Sculptures")
        .then(response=>{
        setState(response.data)
        setLoading(false)
        })
        
    },[])
    return(
        <div className="Sculptures">
            <div className="Gallery-Overview-Blur-Box"></div>
            <div className="Sculptures-item-Box">
                {console.log(state)}
                {loading? 'Loading ...':state.map(({id,img,price,createrName,description,name})=>
                (
                    <div key={id}>
                        <img src={img} alt={name}/>
                        <p>{name}</p>
                        <p>{description}</p>
                        <p>Creater:{createrName}</p>
                        <p>price:{price}</p>
                    </div>
                )
                )}
            </div>
        </div>
    )
}
export default Sculptures