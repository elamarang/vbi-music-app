import {combineReducers} from 'redux'
import {songsReducer} from './songs/songsReducer'
import {searchFieldReducer} from './searchField/searchFieldReducer'
import {albumsReducer} from './albums/albumsReducer'
import {playlistReducer} from './playlist/playlistReducer'

 const rootReducer = combineReducers({
    song: songsReducer,
    searchField: searchFieldReducer,
    album: albumsReducer,
    playlist: playlistReducer
})

export default rootReducer
