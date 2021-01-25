import {CREATE_PLAYLIST, ADD_SONG_PLAYLIST, DELETE_SONG_PLAYLIST} from './playlistTypes'

export const createPlaylist = (name) => {
    return {
        type: CREATE_PLAYLIST,
        payload: name
    }
}

export const addSongToPlaylist = (song) => {
    return {
        type: ADD_SONG_PLAYLIST,
        payload: song
    }
}

export const deleteSongFromPlaylist = (song) => {
    return {
        type: DELETE_SONG_PLAYLIST,
        payload: song
    }
}