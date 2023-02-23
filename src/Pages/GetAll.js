import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

import axios from 'axios'
import { Button } from 'react-bootstrap';

export const GetAll = () => {

    const [posts,setPosts]=useState([])

    useEffect(()=>{
        getPost()
    },[])

    const getPost=async()=>{
        const res = await axios.get("http://localhost:3000/posts")
       setPosts(res.data)
    }

    const handleDelete=async(id)=>{
        await axios.delete("http://localhost:3000/posts/"+id)
        getPost()
    }

  return (
    <div>
<Table striped bordered hover style={{marginTop:'50px'}}>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Author</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post,index)=>
        
        <tr key={post.id}>
        <td>{index+1}</td>
        <td>{post.title}</td>
        <td>{post.author}</td>
        <td>
        <Link to={`single/${post.id}`} style={{textDecoration:'none'}}> 
            <Button variant='light'style={{background:"#0492C2",color:"white"}}>View</Button>&nbsp;
        </Link>
        <Link to={`edit/${post.id}`} style={{textDecoration:'none'}}> 
            <Button variant='light' style={{background:"#CC7722",color:"white"}}>Update</Button>&nbsp;
        </Link>
        
            <Button variant='light'
                     style={{background:"#9B111E",color:"white"}}
                     onClick={()=>handleDelete(post.id)}
                     >Delete</Button>&nbsp;
            </td>
      </tr>
    
        )}
        
      </tbody>
    </Table>

    </div>
  )
}
