import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import {useHistory} from 'react-router-dom'

export default function Playlist({name,createDt,songs}) {
    const history = useHistory();

    const onClickPlaylist = () =>{
        history.push(`/editplaylist/${name}/view`)
    }
    return (
        <div className='bg-light-white w-80 h-20 dib ma2 pa3 br3 bw2 grow shadow-5'>
            <Container>
            <div onClick={onClickPlaylist}>
                <Row >
                    <Col xs={8}  style={{textAlign:'left'}}>
                    <div>{name}</div> 
                    </Col>
                    <Col xs={4} className='vh'>
                    <div >Created At:{createDt}</div> 
                    </Col> 
                 </Row>
                 </div>                  
            </Container>
        </div>
    )
}
