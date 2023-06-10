import './Nav-Bar-Component.css'
import Nav from '../Nav'
const Home=()=>{
    return(
        <div className="Home">
            <nav>
                <Nav/>
            </nav>
            <div className="Heading">Welcome to Our Art Gallery</div>
            <p classname="Heading-description">
                Discover extraordinary exhibits, view stunning pieces in our permanent collection, 
                and participate in engaging events. Experience the art.
            </p>
        </div>
    )
}
export default Home