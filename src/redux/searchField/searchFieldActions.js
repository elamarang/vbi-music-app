import {CHANGE_SEARCH_FIELD} from './searchFieldTypes'

export const searchFieldChange=(text)=>{
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
}