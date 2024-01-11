import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const Post = ({submittedPost}) => {

    const [postContent, setPostContent] = useState('')
    const [error, setError] = useState('')

    const creatingAPost = (event) => {
        setPostContent(event.target.value)
    }
    const handlePost = () => {
        if(postContent.length > 3){
            submittedPost(postContent)
            setPostContent('')
        }else {
            setError('Post content must be at least 4 characters')
            setTimeout(()=>{
                setError(null)
            }, 2000)
        }
    }
    
  return (
    <div>
        <Form className="d-flex justify-content-center p-4" onSubmit={(event) => {
            event.preventDefault();
            handlePost();
        }}>
                  <Form.Control
                    type="search"
                    placeholder="Share some Progress"
                    className="me-2"
                    aria-label="Search"
                    value={postContent}
                    onChange={creatingAPost}
                  />
        <Button variant="danger" onClick={handlePost}>Post</Button>
        </Form>
        {error && <p className="text-danger">{error}</p>}
    </div>
  )
}

export default Post