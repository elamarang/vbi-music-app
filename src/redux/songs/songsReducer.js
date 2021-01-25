import {
    REQUEST_SONGS_INITIATE, 
    REQUEST_SONGS_SUCCESS, 
    REQUEST_SONGS_FAILED
} from './songsTypes'

const initialState = {
    loading:false,
    songs:[],
    error:''
}

export  const songsReducer = (state=initialState,action) => {
    switch(action.type){
        case REQUEST_SONGS_INITIATE :
            return {
                ...state,
                loading: true
            }
        case REQUEST_SONGS_SUCCESS :
            return {
                ...state,
                songs : action.payload,
                loading: false
            }
        case REQUEST_SONGS_FAILED :
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default: return state
    }
}