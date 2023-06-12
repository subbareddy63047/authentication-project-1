import {Route, Switch} from 'react-router-dom'

// import './index.css'

import NotFound from './components/NotFound'
import LoginForm from './components/LoginForm'
import Home from './components/Home'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
)

export default App
