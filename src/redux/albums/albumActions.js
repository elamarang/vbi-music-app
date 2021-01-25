import axios from 'axios'
import {
    REQUEST_ALBUMS_INITIATE, 
    REQUEST_ALBUMS_SUCCESS, 
    REQUEST_ALBUMS_FAILED,
    FETCH_ALBUMS_URL
} from './albumsTypes'

const requestAlbumsInitiate = () => {
    return {
        type: REQUEST_ALBUMS_INITIATE
    }
}

const requestAlbumsSuccess = (songs) => {
    return {
        type: REQUEST_ALBUMS_SUCCESS,
        payload: songs
    }
}

const requestAlbumsFailure = (err) => {
    return {
        type: REQUEST_ALBUMS_FAILED,
        payload: err
    }
}

export const fetchAlbums = () => {
    return (dispatch)=>{
        dispatch(requestAlbumsInitiate())
        axios.get(FETCH_ALBUMS_URL)
        .then(res=>dispatch(requestAlbumsSuccess(res.data)))
        .catch(err=>dispatch(requestAlbumsFailure(err)))
    }
}
