import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const CommentPost = ({submittedComment}) => {

    const [Comment, setComment] = useState('')

    const creatingComment = (event) => {
        setComment(event.target.value)
    }
    const handleComment = () => {
            submittedComment(Comment)
            setComment('')
    }
    
  return (
    <div>
        <Form className="d-flex justify-content-center p-4" onSubmit={(event) => {
            event.preventDefault();
            handleComment();
        }}>
                  <Form.Control
                    type="search"
                    placeholder="Add a comment"
                    className="me-2"
                    aria-label="Search"
                    value={Comment}
                    onChange={creatingComment}
                  />
        <Button variant="danger" onClick={handleComment}>Comment</Button>
        </Form>
    </div>
  )
}

export default CommentPost