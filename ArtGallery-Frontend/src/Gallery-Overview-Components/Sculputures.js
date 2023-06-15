import { useEffect,useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
const Sculptures=()=>{
    const [state,setState]=useState()
    const [loading,setLoading]=useState(true)   
     
    useEffect(()=>{
        axios.get("https://pear-cooperative-gazelle.cyclic.app/Sculptures")
        .then(response=>{
        setState(response.data)
        setLoading(false)
        })
        
    },[])
    return(
        <div className="Sculptures">
            <h2>Sculptures</h2>
            <div className="Gallery-Overview-Blur-Box"></div>
            <div className="Sculptures-item-Box">
                {console.log(state)}
                {loading? 'Loading ...':state.map(({id,img,price,createrName,description,name,category})=>{
                    const link="/purchase/:"+id+"/:Sculptures"
                return(
                    <div class="Sculptures-element"key={id}>
                        <img src={img} alt={name}/>
                        <p className="Name">{name}</p>
                        <p className="Creater"><span className="creater">Creater : </span>{createrName}</p>
                        <p className="price"><span className="Price">price : </span>${price}</p>
                        <p className="Description">{description}</p>
                        <Link to={link}><button className="purchase-button">Purchase </button></Link>
                    </div>
                )}
                )}
            </div>
        </div>
    )
}
export default Sculptures