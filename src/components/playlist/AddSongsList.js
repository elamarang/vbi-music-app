import React from 'react'
import AddDeleteSong from './AddDeleteSong'

export default function AddSongsList({songs, addSongs, playlist}) {
    return (
<div>
            {songs.map((song,i)=>{
                    return <AddDeleteSong 
                    key={song.id} 
                    id={song.id}
                    title={song.title} 
                    albumId={song.albumId} 
                    thumbnailUrl={song.thumbnailUrl}
                    playlist={playlist}
                    addSongs = {addSongs}
                    />
            })
            }
        </div>    )
}
