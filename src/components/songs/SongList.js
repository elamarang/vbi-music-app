import React from 'react'
import Song from './Song'

function SongList({songs}) {
    return (
        <div>
            {songs.map((song,i)=>{
                    return <Song 
                    key={song.id} 
                    title={song.title} 
                    albumId={song.albumId} 
                    thumbnailUrl={song.thumbnailUrl}
                    />
            })
            }
        </div>
    )
}

export default SongList
