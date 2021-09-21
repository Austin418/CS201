import { Route, Switch } from 'react-router-dom'
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import { links } from './util/const';
import Sun from './Components/Sun';

function App() {
  return (
    <>
      <Navbar />
      
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        
        {links
          .filter((link) => link.text !== 'Home')
          .map((link) => {
            const { id, url, page } = link
            return <Route key={id} path={url}>
              {page}
            </Route>
          })}
      </Switch>
    </>

  )
}

export default App;