import axios from 'axios'
import {
    REQUEST_SONGS_INITIATE, 
    REQUEST_SONGS_SUCCESS, 
    REQUEST_SONGS_FAILED,
    FETCH_SONGS_URL
} from './songsTypes'

const requestSongsInitiate = () => {
    return {
        type: REQUEST_SONGS_INITIATE
    }
}

const requestSongsSuccess = (songs) => {
    return {
        type: REQUEST_SONGS_SUCCESS,
        payload: songs
    }
}

const requestSongsFailure = (err) => {
    return {
        type: REQUEST_SONGS_FAILED,
        payload: err
    }
}

export const fetchSongs = () => {
    return (dispatch)=>{
        dispatch(requestSongsInitiate())
        axios.get(FETCH_SONGS_URL)
        .then(res=>dispatch(requestSongsSuccess(res.data)))
        .catch(err=>dispatch(requestSongsFailure(err)))
    }
}
