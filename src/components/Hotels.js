import React from 'react'
import Card from 'react-bootstrap/Card';
import data from './Data'
function Hotels() {
  
  return (
    <div className="hotels">
      
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top"  />
          <Card.Body>
            <Card.Title>title</Card.Title>
            <Card.Text>
              fee
            </Card.Text>
          </Card.Body>
        </Card>
     
      </div>
  )
}

export default Hotels