import React, { useState, useEffect } from 'react';
import { Button, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ForumScreen = () => {
  const [forums, setForums] = useState([]);
  useEffect(() => {
    const getForums = async () => {
      const res = await axios.get('http://localhost:5000/api/forum');
      setForums(res.data);
    };
    getForums();
  }, []);
  return (
    <div>
      <h1>Forum</h1>
      <Link to='/createforum'>
        <Button>Add</Button>
      </Link>
      <Row>
        {forums.map((item) => (
          <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
            <Card>
              <Card.Body>
                <Card.Title as='div' className='product-title'>
                  <strong>{item.title}</strong>
                </Card.Title>
                <Card.Text as='div'>
                  <p>{item.description}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ForumScreen;
