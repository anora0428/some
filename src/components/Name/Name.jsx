import { Link } from 'react-router-dom'
import './main.scss'

import Twitter from '../../assets/images/icons/twitter.svg'
import Facebook from '../../assets/images/icons/facebook.svg'
import Instagram from '../../assets/images/icons/instagram.svg'
import Linkedin from '../../assets/images/icons/linkedin.svg'
import Github from '../../assets/images/icons/github.svg'

const Name = ()=>{
    return(
        <div className="container-name">
            <div className="left">
                <h1><span>Mashhura</span> Suyunova</h1>
                <p>I'm <span>Fronted Developer</span></p>
            </div>
            <div className="right-side">
                <ul>
                    <li><a href="#"><img src={Twitter} alt="" /></a></li>
                    <li><a href="#"><img src={Facebook} alt="" /></a></li>
                    <li><a href="#"><img src={Linkedin} alt="" /></a></li>
                    <li><a href="#"><img src={Github} alt="" /></a></li>
                    <li><a href="https://www.instagram.com/mashkhura676/" ><img src={Instagram} alt="" /></a></li>
                </ul>
            </div>

            <div className="language">
                <button>ENG</button>
                <button>UZB</button>
            </div>
        </div>
    )
}

export default Name