import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, Col} from 'react-bootstrap';

function CardContent({title,currency,id}) {
  return (
    <>
      
        <Col>
          <Card  key={id} className='mb-3 border-primary bg-warning  '>
              {/* <Card.Img variant="top" src="holder.js/100px180" className='' /> */}
              <Card.Body >
                <Card.Title className='my-auto'>{title}</Card.Title>
                <Card.Text style={{ height: '8em'}} className='mt-3 p-3 bg-light border border-1 border-rounded fs-5'>
                  {currency}
                </Card.Text>
                <Button variant="primary">Click to know more</Button>
              </Card.Body>
          </Card>


        </Col>
          

        
      
    </>
  )
}

export default CardContent