import './main.scss'
import { Link } from 'react-router-dom'
import { motion }from 'framer-motion'


import Name from '../../assets/images/icons/woman.svg'
import Map from '../../assets/images/icons/maps-and-flags.svg'
import Call from '../../assets/images/icons/call.svg'
import Send from '../../assets/images/icons/send.svg'
import Home from '../../assets/images/icons/home.svg'

const pageTransition = {
    in:{
        opacity:1,
        y:0
    },

    out:{
        opacity:0,
        y:"-100%"
    }
}

const pageDuration = {
    duration:1
}

const Contact = ()=>{
    return(
        <motion.div className="container-contact"
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        transition={pageDuration}
        >
            <Link to="/" className="home">
            <img src={Home}  className="home" alt="" /></Link>
            <div className="contact-top">
                <h4 className="contact-title">Feel free to contact me anytimes</h4>
                <h1 className="contact-name">Get in Touch</h1>
                
            </div>
                
            <div className="contact-place">
                <div className="contact-place__left">
                    <h3 className="message">Message Me</h3>
                    <form action="" aria-required>
                        <div className="one ">
                            <input type="text" placeholder="Name" className="input-one margin" />
                            <input type="email" className="input-one" placeholder="Email"/>
                        </div>
                        <input type="text" className="input-one" placeholder="Subject"/>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Message" className="input-one">
                        </textarea>

                        <button type="submit" className="send-button">Send Message</button>
                    </form>
                </div>
                <div className="contact-place__right">
                    <h3 className="info">Contact Info</h3>
                    <p className="lorem">
                        Always available for freelance work if the right project comes along, Feel free to contact me!
                    </p>


                    <div className="info-about-me">
                        <div className="line">
                            <img src={Name} alt="" />
                            <div>
                                <span className="name">Name</span>
                                <span className="full-name">Mashhura Suyunova</span>
                            </div>
                        </div>
                        <div className="line">
                            <img src={Map} alt="" />
                            <div>
                                <span className="name">Location</span>
                                <span className="full-name">Samarkand, UZB</span>
                            </div>
                        </div>
                        <div className="line">
                            <img src={Call} alt="" />
                            <div>
                                <span className="name">Call Me</span>
                                <a href="tel:+998999225211" className="full-name">+99899 922 52 11</a>
                            </div>
                        </div>
                        <div className="line">
                            <img src={Send} alt="" />
                            <div>
                                <span className="name">Email Me</span>
                                <a href="#" className="full-name">example@dot.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Contact