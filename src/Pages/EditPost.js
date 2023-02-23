import React, { useState,useEffect } from 'react'
import { Button, Form, Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


export const EditPost = () => {

    let {id} = useParams()
    const navigate = useNavigate()

    const [posts, setPost] = useState({
        title: "",
        author: ""
    })

    useEffect(()=>{
        getSinglePost()
    },[])
    const getSinglePost = async()=>{
        const res = await axios.get('http://localhost:3000/posts/'+id)
        // console.log(res.data)
        setPost(res.data)
    }
    const handleChange = (e) => {
        setPost({ ...posts, [e.target.name]: e.target.value })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        await axios.put('http://localhost:3000/posts/'+id, posts)
        alert("Data Updated Successfully")
        navigate('/')
    }

    return (
        <div>
            <Card body style={{ width: '20rem', marginTop: '80px', marginLeft: 'auto', marginRight: 'auto' }}>
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
