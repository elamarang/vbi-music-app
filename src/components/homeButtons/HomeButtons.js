import React from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import {useState} from 'react'
import {Link} from 'react-router-dom'

// Buttons at the top that will display Either songs or Playlists based on selection

export default function HomeButtons() {
    const [isSongsSelected,setIsSongsSelected] = useState(true)
    return (
        <div>
            <ButtonGroup aria-label="Basic example">
            <Link to="/"><Button id="button-allsongs" variant={isSongsSelected?"secondary":"light"}
                onClick={()=>setIsSongsSelected(true)}>All Songs</Button></Link>
             <Link to="/playlists"><Button id="button-playlists" variant={isSongsSelected?"light":"secondary"}
                onClick={()=>setIsSongsSelected(false)}>Playlists</Button></Link>
            </ButtonGroup>
        </div>
    )
}
