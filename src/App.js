//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import NewNote from './components/NewNote/NewNote';
import Notes from './components/Notes/Notes';
import NoteDetails from './components/NoteDetails/NoteDetails';
import Favs from './components/Favs/Favs';
import About from './components/About/About';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <NewNote />
          <Notes />
        </Route>
        <Route exact path="/favs">
          <Favs />
        </Route>
        <Route exact path="/notes">
          <Notes />
        </Route>
        <Route exact path="/notes/:id">
          <NoteDetails />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
