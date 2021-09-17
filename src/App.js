import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from 'react-router-dom'


import Home from './pages/Home'
import './assets/styles/main.scss'

import {
  About,
  Blog,
  Resume,
  Contact,
  Portofilio
}from './pages'
import { AnimatePresence }from 'framer-motion'


function App() {
  // const location = useLocation();
  return (
    <div className="App">
        <Router>
          <AnimatePresence exitBeforeEnter>
            <Switch >
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/blog" component={Blog}/>
              <Route path="/resume" component={Resume}/>
              <Route path="/portofilio" component={Portofilio}/>
              <Route path="/contact" component={Contact}/>
            </Switch>
          </AnimatePresence>
        </Router>
    </div>
  );
}

export default App;
