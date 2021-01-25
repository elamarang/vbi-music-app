import {
    REQUEST_ALBUMS_INITIATE, 
    REQUEST_ALBUMS_SUCCESS, 
    REQUEST_ALBUMS_FAILED
} from './albumsTypes'

const initialState = {
    loading:false,
    albums:[],
    error:''
}

export  const albumsReducer = (state=initialState,action) => {
    switch(action.type){
        case REQUEST_ALBUMS_INITIATE :
            return {
                ...state,
                loading: true
            }
        case REQUEST_ALBUMS_SUCCESS :
            return {
                ...state,
                albums : action.payload,
                loading: false
            }
        case REQUEST_ALBUMS_FAILED :
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default: return state
    }
}