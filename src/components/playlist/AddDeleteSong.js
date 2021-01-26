import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import _ from 'underscore'
import './AddDeleteSong.css'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import {useSelector, useDispatch} from 'react-redux'
import Button from 'react-bootstrap/Button'
import {addSongToPlaylist, deleteSongFromPlaylist} from '../../redux'
import {useHistory} from 'react-router-dom'

export default function AddDeleteSong({albumId,title,thumbnailUrl,id, addSongs,playlist}) {
    const albums = useSelector(state=>state.album.albums)
    const album = _.find(albums,{id:albumId});
    const dispatch = useDispatch();
    const history = useHistory();

    const onClickAdd=()=>{
        const addSongObj = {
            playlist,
            song :  {
                         id, 
                         title,
                         albumId,
                         album: album.title,
                         thumbnailUrl
                    }
            }
        dispatch(addSongToPlaylist(addSongObj))
        history.push(`/editplaylist/${playlist}/add`)
    }

    const onClickDelete = () => {
        const delSongObj = {
            playlist,
            id
        }
        dispatch(deleteSongFromPlaylist(delSongObj))
        history.push(`/editplaylist/${playlist}/view`)
    }
    return (
        <div className='bg-light-white w-80 dib ma2 pa3 br3 bw2 grow shadow-5'>
            <Container>
                <Row>
                    <Col xs={3} >
                        <Image src={thumbnailUrl} thumbnail />
                    </Col>
                    <Col xs={5}  style={{textAlign:'left'}}>
                    <div><b>Title</b>: {title}</div> 
                    <div><b>Singers</b>: -</div> 
                    <div><b>Album</b>: {album.title}</div>
                    </Col>
                    <Col xs={1} className='vh'>
                    <div >__:__</div> 
                    </Col>                   
                    <Col xs={3} className='vh'>
                        {addSongs?
                    <Button variant="primary" className="pa2 ma2 tr" onClick={()=>onClickAdd()}>Add to List</Button>:
                    <Button variant="danger" className="pa2 ma2 tr" onClick={()=>onClickDelete()}>Delete</Button>
                        }
                    </Col>                   
                </Row>
            </Container>
        </div>   
         )
}
