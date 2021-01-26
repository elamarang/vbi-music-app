import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import SearchBox from '../searchBox/SearchBox'
import SongList from './SongList'
import Spinner from 'react-bootstrap/Spinner'
import Scroll from '../Scroll'
import { searchFieldChange} from '../../redux'



export default function SongView() {

    const songs = useSelector(state=>state.song.songs)
    const searchField = useSelector(state=>state.searchField.searchField);

    // using the loading state value to display the Spinner animation until the API call goes through
    const songLoading = useSelector(state=>state.song.loading)
    const albumLoading = useSelector(state=>state.album.loading)
    const error = useSelector(state=>state.song.error)
    const dispatch = useDispatch();

    //filtering the songs list based on text entered in input
    const filteredSongs = songs.filter(song => {
        return song.title.toLowerCase().includes(searchField.toLowerCase());
      })
    
    return (
        <div>
            <SearchBox onSearchChange={(e)=>dispatch(searchFieldChange(e.target.value))}/>
                {(songLoading||albumLoading)?<Spinner animation="border" variant="secondary" />:
                error.length>0?<div>Oops. Unexpected Error occured</div>:
            <Scroll>
                <SongList songs={filteredSongs} />
            </Scroll>}
        </div>
    )
}
