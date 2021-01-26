import React, { useEffect } from 'react'
import SearchBox from '../searchBox/SearchBox'
import Scroll from '../Scroll'
import AddSongsList from './AddSongsList';
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {  searchFieldChange, shuffleSongsPlaylist} from '../../redux'

export default function AddSongsToPlaylist ({playlist, addSongs, shuffle})  {
    const songs = useSelector(state=>state.song.songs)
    const searchField = useSelector(state=>state.searchField.searchField);
    const dispatch = useDispatch();
    const history = useHistory();

    const shuffleSongs=(items) => {
        var currentIndex = items.length, temporaryValue, randomIndex;
      
        while (0 !== currentIndex) {
      
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          temporaryValue = items[currentIndex];
          items[currentIndex] = items[randomIndex];
          items[randomIndex] = temporaryValue;
        }
      
        return items;
      }
    const currSongs = useSelector(state=>{
        const currentIndex = state.playlist.playlists.findIndex(element => element.name === playlist )
        return state.playlist.playlists[currentIndex].songs}
        )
    const notAddedSongs =  songs.filter(song=>
        currSongs.findIndex(element => element.id === song.id ) === -1
    )
    const filteredSongs = notAddedSongs.filter(song => {
        return song.title.toLowerCase().includes(searchField.toLowerCase());
      })
      
       useEffect(()=>{
           if(!addSongs&&shuffle>0){
            const songsObj ={
                playlist,
                songs:shuffleSongs(currSongs)
            }
            dispatch(shuffleSongsPlaylist(songsObj))
            history.push(`/editplaylist/${playlist}/view`)
           }
        },[shuffle]);
     
    return (
        <div>
            {addSongs&&<SearchBox onSearchChange={(e)=>dispatch(searchFieldChange(e.target.value))}/>}
            <Scroll>
                <AddSongsList songs={addSongs?filteredSongs:currSongs} playlist={playlist} addSongs={addSongs}/>
            </Scroll>
        </div>
    )
};


