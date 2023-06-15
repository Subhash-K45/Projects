import { useEffect,useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
const Contemporary=()=>{
    const [state,setState]=useState()
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        axios.get("https://pear-cooperative-gazelle.cyclic.app/Contemporary_Paintings")
        .then(response=>{
            setState(response.data)
            setLoading(false)
        })
    },[])
    return(
        <div className="Contemporary">
            <h2>Contemporary Paintings</h2>
            <div className="Gallery-Overview-Blur-Box"></div>
            <div className="Contemporary-item-Box">
                {loading? 'Loading ...':state.map(({id,img,price,artist,description,name,category})=>{
                    const link=`/purchase/:${id}/:Contemporary_Paintings`
                return(
                    <div className="Contemporary-elements"key={id}>
                        <img src={img} alt={name}/>
                        <p className="Name">{name}</p>
                        <p className="Creater"><span className="Artist">Artist : </span>{artist}</p>
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
export default Contemporary