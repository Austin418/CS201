import { Route, Switch } from 'react-router-dom'
import OpenModalButton from './Components/OpenModalButton';
import OpenSidebarButton from './Components/OpenSidebarButton';
import Modal from './Components/Modal';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home';
import { links } from './util/const'

const filterList = ["home", 'calendar']

function App() {
  return (
    <main>
      <OpenSidebarButton />
      <OpenModalButton />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {links
          .filter((link) => !filterList.includes(link.text))
          .map((link) => {
            const { page, id, url } = link
            return (
              <Route key={id} path={url}>
                {page}
              </Route>
            )
          })}
      </Switch>
      <Sidebar />
      <Modal />
    </main>
  );
}

export default App;
