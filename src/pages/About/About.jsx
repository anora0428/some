import { Link }from 'react-router-dom'

import {motion} from 'framer-motion'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './main.scss'
import AboutImage from '../../assets/images/about-image.jpg'

import Twitter from '../../assets/images/icons/twitter.svg'
import Facebook from '../../assets/images/icons/facebook.svg'
import Instagram from '../../assets/images/icons/instagram.svg'
import Linkedin from '../../assets/images/icons/linkedin.svg'
import Github from '../../assets/images/icons/github.svg'
import Home from '../../assets/images/icons/home.svg'

import Html from '../../assets/images/icons/html.svg'
import Css from '../../assets/images/icons/css.svg'
import Bts from '../../assets/images/icons/bts.svg'
import Sass from '../../assets/images/icons/sass.svg'
import Reacts from '../../assets/images/icons/react.svg'
import Js1 from '../../assets/images/icons/js (1).svg'
import User from '../../assets/images/icons/user.svg'

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

const About = ()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      };
    return(
        <motion.div className="container-about"
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        transition={pageDuration}
        >
            <Link to="/"><img className="home-icon" src={Home} alt="" /></Link>
            <div className="about-top">
                <h3 className="about-page__title">Get to know me</h3>
                <h1 className="about-page__name">About Me</h1>
            </div>

            <div className="about-info">
                <div className="about-info__left">
                    <img src={AboutImage} alt="" />
                </div>

                <div className="about-info__right">
                    <h3 className="about-info__right--title">Who am i?</h3>
                    <h2 className="about-info__right--name">I'm Mashhura Suyunova, Web Developer and English Speaker </h2>
                    <p className="about-info__right--info">
                        I am a freelancer based in the Uzbekistan and i have been building  websites for years, which comply with the latest design trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.
                    </p>

                    <div className="about-page__information">
                        <div className="about-page__information--left">
                            <h4 className="first-style">Name: <span className="second-style">Mashhura Suyunova</span></h4>
                            <h4 className="first-style">Age: <span className="second-style">21</span></h4>
                        </div>

                        <div className="about-page__information--right">
                            <h4 className="first-style">Email: <span className="second-style"><a href="#">mashhura@example.com</a></span></h4>
                            <h4 className="first-style">From: <span className="second-style">Samarkand, UZB</span></h4>
                        </div>
                    </div>

                    <div className="follow-me">
                        <h2 className="follow">Follow me</h2>
                        <ul>
                            <li>
                                <a href="">
                                    <img src={Twitter} alt="" />
                                </a>
                            </li>
                            
                            <li>
                                <a href="https://www.instagram.com/mashkhura676/">
                                    <img src={Instagram} alt="" />
                                </a>
                            </li>
                            
                            <li>
                                <a href="">
                                    <img src={Linkedin} alt="" />
                                </a>
                            </li>
                            
                            <li>
                                <a href="">
                                    <img src={Github} alt="" />
                                </a>
                            </li>
                            
                            <li>
                                <a href="">
                                    <img src={Facebook} alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="my-skills">
                <h5 className="skills-info">skills i offer to my clients</h5>
                <h1 className="skills-still">My Skills</h1>

                <div className="skills-direction">
                    <div className="mini-skill">
                        <img src={Html} alt="" />
                        <h2 className="icon-title">HTML5</h2>
                        <p>
                            This is the most necessary thing that programmers need to learn. Lorem ipsum dolar sit amet.
                        </p>
                    </div>
                    <div className="mini-skill">
                        <img src={Css} alt="" />
                        <h2 className="icon-title">CSS3</h2>
                        <p>
                            An environment to decorate the site and improve design quality. Lorem ipsum dolar sit amet.
                        </p>
                    </div>
                    <div className="mini-skill">
                        <img src={Sass} alt="" />
                        <h2 className="icon-title">SASS</h2>
                        <p>
                            CSS’s super-enhanced coding environment, with which the codes are very simple and concise
                        </p>
                    </div>
                    <div className="mini-skill">
                        <img src={Bts} alt="" />
                        <h2 className="icon-title">Bootstrapt</h2>
                        <p>
                            A library of ready-made codes for creating websites, Lorem ipsum dolar sit amet. Hakuna matata
                        </p>
                    </div>
                    <div className="mini-skill">
                        <img src={Js1} alt="" />
                        <h2 className="icon-title">JavaScript</h2>
                        <p>
                            The perfect language for creating websites. An environment with high potential, Hakuna matata
                        </p>
                    </div>
                    <div className="mini-skill">
                        <img src={Reacts} alt="" />
                        <h2 className="icon-title">React</h2>
                        <p>
                            JavaScript's best library, unlimited possibilities, much simplified and abbreviated coding
                        </p>
                    </div>
                </div>
            </div>

            <h4 className="friend-title">What my friends think about me</h4>
            <h2 className="friend-name">Testimonials</h2>
            

            <div className="my-friends">
                <Slider {...settings}>
                    <div className="block-ome">
                        <div className="left-side">
                            <img src={User} alt="" />
                            <div>
                                <span className="span-one">Nozima Zayurkulova</span>
                                <span className="span-two">Software Engineer</span>
                            </div>
                        </div>
                        <p>
                            Mashhura did an excellent creative job, addressing our request quickly, and also providing her own graphic insight, being open to feedback and changes or edits when they arose. She worked with us the entire way. Highly recommended
                         </p>
                    </div>

                    <div className="block-ome">
                        <div className="left-side">
                            <img src={User} alt="" />
                            <div>
                                <span className="span-one">Nozima Zayurkulova</span>
                                <span className="span-two">Software Engineer</span>
                            </div>
                        </div>
                        <p>
                            Mashhura did an excellent creative job, addressing our request quickly, and also providing her own graphic insight, being open to feedback and changes or edits when they arose. She worked with us the entire way. Highly recommended
                        </p>
                    </div>

                    <div className="block-ome">
                        <div className="left-side">
                            <img src={User} alt="" />
                            <div>
                                <span className="span-one">Nozima Zayurkulova</span>
                                <span className="span-two">Software Engineer</span>
                            </div>
                        </div>
                        <p>
                            Mashhura did an excellent creative job, addressing our request quickly, and also providing her own graphic insight, being open to feedback and changes or edits when they arose. She worked with us the entire way. Highly recommended
                        </p>
                    </div>
                    
                    
                </Slider>
            </div>
        </motion.div>
    )
}

export default About