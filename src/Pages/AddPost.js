import React, { useState } from 'react'
import {Button,Form,Card} from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AddPost = () => {

    const navigate = useNavigate()


    const[posts,setPosts]=useState({
        title:"",
        author:""
    })


    const handleChange=(e)=>{
        console.log(e.target.value)
        setPosts({...posts, [e.target.name]:e.target.value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        await axios.post("http://localhost:3000/posts",posts)
        navigate('/')
        
        
    }
    return (
        <div>
            <Card body style={{width:'20rem',marginTop:'80px',marginLeft:'auto',marginRight:'auto'}}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" 
                                    placeholder="Enter Title" 
                                    onChange={handleChange}
                                    name="title"
                                    value={posts.title}
                                />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" 
                                    placeholder="Enter Author" 
                                    onChange={handleChange}
                                    name="author"
                                    value={posts.author}
                                />
                    </Form.Group>
                    <Button variant="success" type="submit" onClick={handleSubmit} >
                        Submit
                    </Button>
                </Form>
            </Card>
        </div>
    )
}
