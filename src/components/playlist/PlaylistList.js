import React,{useState} from 'react'
import Button from 'react-bootstrap/Button'
import Playlist from './Playlist'
import {useSelector} from 'react-redux'
import CreatePlaylistModal from './CreatePlaylistModal'

export default function PlaylistList() {
 

    const playLists = useSelector(state=> state.playlist.playlists)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            {playLists.map(playList=>{
                return <Playlist 
                key={playList.name} 
                name = {playList.name} 
                songs={playList.songs} 
                createDt = {playList.createdAt}
                />
            })}
                 <Button variant="secondary" className="pa5 ma3" onClick={handleShow}>Create Playlist</Button>
                 <CreatePlaylistModal show={show} playLists={playLists} handleClose={handleClose}/>
                 
        </div>
    )
}
