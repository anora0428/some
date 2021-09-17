import { Link } from 'react-router-dom'
import Anime from '../../assets/images/anime.png'
import Home from '../../assets/images/icons/home.svg'
import Isert from '../../assets/images/isert.jpg'
import Certificate from '../../assets/images/certificate.jpg'
import './main.scss'

import {motion} from 'framer-motion'

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

const Resume = ()=>{
    return(
        <motion.div className="container"
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        transition={pageDuration}
        >
            
            <Link to="/">
                <img className="home" src={Home} alt="" />
            </Link>
            <div className="resume-top">
                <h3 className="resume-top__title">Check out my Resume</h3>
                <h1 className="resume-top__name">Resume</h1>
            </div>
            <h1 className="education">
                Education
            </h1>
            <div className="resume-wrapper">
                <div className="left-side">
                    <div className="my-picture">
                        <img className="pro-image" src={Anime} alt="" />
                    </div>
                </div>
                <div className="right-side">
                    
                    <div className="education-block">

                        <div className="education-block__item">
                            <h2 className="education-block__item--name">
                                School
                            </h2>
                            <span className="education-block__item--year">@3 th school 2007-2016</span>
                            <p className="education-block__item--title">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.
                            </p>
                        </div>

                        <div className="education-block__item">
                            <h2 className="education-block__item--name">
                                College
                            </h2>
                            <span className="education-block__item--year">college 2016-2019</span>
                            <p className="education-block__item--title">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.
                            </p>
                        </div>

                        <div className="education-block__item">
                            <h2 className="education-block__item--name">
                                University
                            </h2>
                            <span className="education-block__item--year">Western washington University / 2021-2023</span>
                            <p className="education-block__item--title">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            
            <div className="skill-degre">
                <h3 className="skill-degre_title">My level of knowledge in some tools</h3>
                <h1 className="skill-degre_name">My Powers</h1>

                <div className="skills-wrapper">
                    <div className="skill-wrapper_one">
                        <span className="skill-wrapper_one__html"></span>
                    </div>
                    <div className="skill-wrapper_one">
                        <span className="skill-wrapper_one__bootstrapt"></span>
                    </div>
                    <div className="skill-wrapper_one">
                        <span className="skill-wrapper_one__css"></span>
                    </div>
                    <div className="skill-wrapper_one">
                        <span className="skill-wrapper_one__javascript"></span>
                    </div>
                    <div className="skill-wrapper_one">
                        <span className="skill-wrapper_one__sass"></span>
                    </div>
                    <div className="skill-wrapper_one">
                        <span className="skill-wrapper_one__react"></span>
                    </div>
                </div>
            </div>

            <div className="another-skill">
                <div className="another-skill_left">
                    <h1 className="another-skill_left__name">IELTS 6.5</h1>
                    <p className="another-skill_left__overview">
                        My skill information elit. Quibusdam assumenda quod aperiam dolore? Qui, autem! Dicta, itaque consequatur eligendi, similique voluptatum perferendis recusandae vitae explicabo dignissimos laudantium omnis veniam sit.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odit totam tempore dolor
                    </p>
                </div>
                <div className="another-skill_right">
                    <img src={Isert} alt="image-for-skill" style={{width:"100%", height:"610px"}}/>
                </div>
            </div>


            <div className="another-skill">
                <div className="another-skill_left">
                    <h1 className="another-skill_left__name">Front End Web Development Certificate</h1>
                    <p className="another-skill_left__overview">
                        My skill information elit. Quibusdam assumenda quod aperiam dolore? Qui, autem! Dicta, itaque consequatur eligendi, similique voluptatum perferendis recusandae vitae explicabo dignissimos laudantium omnis veniam sit.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odit totam tempore dolor
                    </p>
                </div>
                <div className="another-skill_right">
                    <img src={Certificate} alt="image-for-skill" style={{width:"100%", height:"610px"}}/>
                </div>
            </div>
        </motion.div>
    )
}

export default Resume