import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

import FormContainer from '../components/FormContainer';
import axios from 'axios';

const AddForumScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/forum/create', {
        title,
        description,
      });
      console.log(res);
      navigate('/forum');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <FormContainer>
        <h1>Add Forum</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className='my-2' controlId='title'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              placeholder='Enter Title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className='my-2' controlId='description'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              placeholder='Enter Description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type='submit' variant='primary'>
            Create Forum
          </Button>
        </Form>
      </FormContainer>
    </div>
  );
};

export default AddForumScreen;
