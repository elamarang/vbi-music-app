import {CHANGE_SEARCH_FIELD} from './searchFieldTypes'

const initialState = {
    searchField:''
}

export const searchFieldReducer =(state=initialState, action) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return { ...state,
                searchField:action.payload};
        default : 
            return state;

    }
}