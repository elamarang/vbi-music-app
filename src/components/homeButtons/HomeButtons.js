import React from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'

export default function HomeButtons() {
    const dispatch = useDispatch();
    const [isSongsSelected,setIsSongsSelected] = useState(true)
    return (
        <div>
            <ButtonGroup aria-label="Basic example">
            <Link to="/"><Button variant={isSongsSelected?"secondary":"light"}
                onClick={()=>setIsSongsSelected(true)}>All Songs</Button></Link>
             <Link to="/playlists"><Button variant={isSongsSelected?"light":"secondary"}
                onClick={()=>setIsSongsSelected(false)}>Playlists</Button></Link>
            </ButtonGroup>
        </div>
    )
}
