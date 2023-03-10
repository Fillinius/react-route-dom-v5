import NavBar from '../components/navBar'
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from '../components/login'
import Dashboard from '../components/dashBoarb'
import Posts from '../components/posts'
import Home from '../components/home'
import Notfound from '../components/not-found'

function App() {
  return (
    <div>
      <NavBar />
      <h1>App</h1>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/posts/:postId?" component={Posts} />
        <Route path="/" exact component={Home} />
        <Route path="/404" component={Notfound} />
        <Redirect from="/admin" to="/dashboard" />
        <Redirect to="404" />
      </Switch>
    </div>
  )
}

export default App
