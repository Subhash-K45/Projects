import { useState} from 'react'

import './Nav-Bar-Component.css'
import Nav from '../Nav'
import OverView from '../OverviewComponent'

const Home=()=>{
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
                <div className="Blur-Box">
                </div>
                <div className="OverView-Box">
                    <OverView />
                </div>
            </div>
        </div>
    )
}
export default Home