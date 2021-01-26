import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button'
import {useParams, useHistory} from 'react-router-dom'
import AddSongsToPlaylist from './AddSongsToPlaylist'


export default function PlaylistView() {
    const {playlist} = useParams();
    const {type} = useParams();
    const[addSongs, setAddSongs] = useState(false);
    const[shuffle, setShuffle] = useState(0);
    const history = useHistory();
    useEffect(()=>{
        if(type==='add')
        setAddSongs(true)
        else if(type==='view')
        setAddSongs(false)
    },[type])

    return (
        <div>
            <div className="flex justify-between">
            <span className="tl b pa2 ma2">{`${playlist} - Editable`}</span>
            {addSongs&&<Button variant="success" className="pa2 ma2 tr"
            onClick={()=>history.push(`/editplaylist/${playlist}/view`)}>Done</Button>}
            </div>
            {!addSongs&&<div className="tr">
            <Button variant="info" className="pa2 ma2" 
            onClick={() => setShuffle(prevShuffle=>prevShuffle+1)}
            >Shuffle Play</Button>
            <Button variant="primary" className="pa2 ma2" 
                    onClick={()=>history.push(`/editplaylist/${playlist}/add`)}>Add Song</Button>
            </div>}
            <hr/>
            <AddSongsToPlaylist  shuffle={shuffle} playlist={playlist} addSongs={addSongs} />
        </div>
    )
}
