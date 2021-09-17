import Name from '../components/Name/Name'
import Header from '../container/Header/Header'
import Anime from '../assets/images/anime.png'
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

const Home = ()=>{
    return(
        <motion.div 
            className="home-wrapper"
            initial="out"
            animate="in"
            exit="out"
            variants={pageTransition}
            transition={pageDuration}
            
        >
            <div className="home-page__header">
                <Header/>
            </div>
            <div className="home-page__name">
                <Name/>
            </div>
        </motion.div>
    )
}

export default Home