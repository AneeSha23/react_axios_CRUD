import React, { useEffect, useState } from 'react'
import { Card, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios'


export const GetSingle = () => {

    let {id}=useParams()

    const[post,setPost]=useState([])

    useEffect(()=>{
        getSinglePost()
    },[])

    const getSinglePost = async()=>{
        const res = await axios.get('http://localhost:3000/posts/'+id)
        // console.log(res.data)
        setPost(res.data)
    }

    return (
        <div>
            <Card style={{ width: '18rem',marginLeft:'auto',marginRight:'auto',marginTop:'150px' }}>
                <ListGroup variant="flush">
                    <ListGroup.Item>Title:{post.title} </ListGroup.Item>
                    <ListGroup.Item>Author:{post.author} </ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    )
}
