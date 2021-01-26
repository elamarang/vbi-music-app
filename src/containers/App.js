import './App.css';
import { useEffect} from 'react';
import { useDispatch} from 'react-redux'
import HomeButtons from '../components/homeButtons/HomeButtons'
import {fetchSongs, fetchAlbums} from '../redux'
import PlaylistList from '../components/playlist/PlaylistList';
import PlaylistView from '../components/playlist/PlaylistView'
import SongView from '../components/songs/SongView'
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  //We are fetching Albums and songs from API using On first Mount of App component
  useEffect(()=>{
    document.title = 'VBI Music App';
    dispatch(fetchSongs())    
    dispatch(fetchAlbums())
  },[])


  return (
    <div className="App br3 pa3 ma2 shadow-5 w-70 center">
      <Router>
        <HomeButtons/>
        <Switch>
          <Route exact path="/">
              <SongView/>
          </Route>
          <Route path="/playlists">
              <PlaylistList/>
          </Route>
          <Route path="/editplaylist/:playlist/:type">
              <PlaylistView/>
          </Route>
     </Switch>
     </Router>
    </div>
  );
}

export default App;
