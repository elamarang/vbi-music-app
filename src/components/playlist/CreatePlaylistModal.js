import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './CreatePlaylistModal.css'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {createPlaylist} from '../../redux'

export default function CreatePlaylistModal({show,handleClose,playLists}) {
    const [input,setInput] = useState('')
    const [duplicate, setDuplicate] = useState(false)
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(()=>{
        setInput('')
        setDuplicate(false)
    },[show])



    const handleSubmit = () =>{
        const search=playLists.find(obj=>obj.name===input);
        if(search)
        setDuplicate(true)
        else
        {
            setDuplicate(false)
            handleClose()
            history.push(`/editplaylist/${input}/add`)
            dispatch(createPlaylist(input))
        }
    }
    return (
        <div>
        <Modal show={show} onHide={handleClose} size="sm" className='my-modal'>
        <Modal.Dialog >
            <Modal.Body className='my-modal-body'>
                <input 
                className="pa2 ma3"
                placeholder="Enter Playlist Name"
                value={input}
                onChange={(e)=>setInput(e.target.value)}></input>
                {duplicate && <div className="red center">*Playlist already exists</div>}
            </Modal.Body>

            <Modal.Footer className='h-20 center'>
                <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                <Button variant="primary" onClick={()=>handleSubmit()}>Save</Button>
            </Modal.Footer>
        </Modal.Dialog>
        </Modal>
            
        </div>
    )
}
