import {
    CREATE_PLAYLIST, 
    ADD_SONG_PLAYLIST, 
    DELETE_SONG_PLAYLIST,
    SHUFFLE_SONGS_PLAYLIST
} from './playlistTypes'

const initialState = {
    playlists : []
}

export const playlistReducer = (state=initialState,action) => {
    switch(action.type){
        case CREATE_PLAYLIST :
            return {
                ...state,
                playlists : [...state.playlists,{
                    name: action.payload,
                    songs: [],
                    createdAt: `${(new Date()).toLocaleDateString()} ${(new Date()).toLocaleTimeString()}`
                }]
            }
        case ADD_SONG_PLAYLIST :
            {
                const currentIndex = state.playlists.findIndex(element => element.name === action.payload.playlist )
                let playListArray =[...(state.playlists)]
                let playListSongs = playListArray[currentIndex].songs
                playListSongs.push(action.payload.song)
                playListArray[currentIndex].songs=playListSongs
                return{
                    playlists : playListArray
                }
            }
        case DELETE_SONG_PLAYLIST:
            {
                const currentIndex = state.playlists.findIndex(element => element.name === action.payload.playlist )
                let playListArray =[...(state.playlists)]
                let playListSongs = state.playlists[currentIndex].songs
                const songIndex = playListSongs.findIndex(song=>song.id===action.payload.id)
                playListSongs.splice(songIndex, 1);
                playListArray[currentIndex].songs=playListSongs
                return{
                    playlists : playListArray
                }
            }
        case SHUFFLE_SONGS_PLAYLIST :
            {
                const currentIndex = state.playlists.findIndex(element => element.name === action.payload.playlist )
                let playListArray =[...(state.playlists)]
                playListArray[currentIndex].songs=action.payload.songs
                return{
                    playlists : playListArray
                }
            }
        default: return state
    }
}

