import { Link }from 'react-router-dom'
import Home from '../../assets/images/icons/home.svg'
import './main.scss' 

import {motion}from 'framer-motion'


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

const Blog = ()=>{
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
            <div className="page-wrapper">
                <div className="page-wrapper_top">
                    <h3 className="page-wrapper_top__title">Check out my latest goals interests</h3>
                    <h1 className="page-wrapper_top__name">My Goals & Interests</h1>
                </div>

                <div className="page-wrapper_bottom">
                    <h1 className="page-wrapper_bottom__name">Goals</h1>
                    <div className="page-wrapper_bottom__goals">
                        <div className="page-wrapper_bottom__goals--item">
                            <img className="page-wrapper_bottom__goals--item-image" src="" alt="image-for-goals" />
                            <h2 className="page-wrapper_bottom__goals--item-name">
                                Lorem ipsum dolor sit amet
                            </h2>
                            <p className="page-wrapper_bottom__goals--item-overview">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.
                            </p>
                        </div>
                        <div className="page-wrapper_bottom__goals--item">
                            <img className="page-wrapper_bottom__goals--item-image" src="" alt="image-for-goals" />
                            <h2 className="page-wrapper_bottom__goals--item-name">
                                Lorem ipsum dolor sit amet
                            </h2>
                            <p className="page-wrapper_bottom__goals--item-overview">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.
                            </p>
                        </div>
                        <div className="page-wrapper_bottom__goals--item">
                            <img className="page-wrapper_bottom__goals--item-image" src="" alt="image-for-goals" />
                            <h2 className="page-wrapper_bottom__goals--item-name">
                                Lorem ipsum dolor sit amet
                            </h2>
                            <p className="page-wrapper_bottom__goals--item-overview">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.
                            </p>
                        </div>
                    </div>
                    <h1 className="page-wrapper_bottom__name">Interests</h1>
                    <div className="page-wrapper_bottom__interests">
                        <div className="page-wrapper_bottom__interests--item">
                            <img className="page-wrapper_bottom__interests--item-image" src="" alt="image-for-interests" />
                            <h2 className="page-wrapper_bottom__interests--item-name">
                                Lorem ipsum dolor sit amet
                            </h2>
                            <p className="page-wrapper_bottom__interests--item-overview">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.
                            </p>
                        </div>
                        <div className="page-wrapper_bottom__interests--item">
                            <img className="page-wrapper_bottom__interests--item-image" src="" alt="image-for-interests" />
                            <h2 className="page-wrapper_bottom__interests--item-name">
                                Lorem ipsum dolor sit amet
                            </h2>
                            <p className="page-wrapper_bottom__interests--item-overview">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.
                            </p>
                        </div>
                        <div className="page-wrapper_bottom__interests--item">
                            <img className="page-wrapper_bottom__interests--item-image" src="" alt="image-for-interests" />
                            <h2 className="page-wrapper_bottom__interests--item-name">
                                Lorem ipsum dolor sit amet
                            </h2>
                            <p className="page-wrapper_bottom__interests--item-overview">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Blog