import { Link } from 'react-router-dom' 
import './main.scss'
import Logo from '../../assets/images/logo.png'
const Header = ()=>{
    return(
        <div className="header-wrapper">
            <div className="container">
                <div className="left">
                    <img src={Logo} alt="" />
                </div>
                <div className="right">
                    <ul>
                        <li>
                            <Link to="/about" className="header-link">About</Link>
                        </li>
                        <li>
                            <Link to="/resume" className="header-link">Resume</Link>
                        </li>
                        <li>
                            <Link to="/portofilio" className="header-link">Portofilio</Link>
                        </li>
                        <li>
                            <Link to="/blog" className="header-link">Blog</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="header-link">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header