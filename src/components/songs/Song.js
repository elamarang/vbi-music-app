import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import _ from 'underscore'
import './Song.css'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import {useSelector} from 'react-redux'



function Song({albumId,title,thumbnailUrl}) {
     const albums = useSelector(state=>state.album.albums)
    const album = _.find(albums,{id:albumId});
    return (
        <div className='bg-light-white w-80 dib ma2 pa3 br3 bw2 grow shadow-5'>
            <Container>
                <Row>
                    <Col xs={3} >
                        <Image src={thumbnailUrl} thumbnail />
                    </Col>
                    <Col xs={6}  style={{textAlign:'left'}}>
                    <div><b>Title</b>: {title}</div> 
                    <div><b>Singers</b>: -</div> 
                    <div><b>Album</b>: {album.title}</div>
                    </Col>
                    <Col xs={3} className='vh'>
                    <div >Play time: __:__</div> 
                    </Col>                   
                 </Row>
            </Container>
        </div>
    )
}

export default Song
