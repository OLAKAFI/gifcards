import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {} from 'react-bootstrap';

function CardContent({giftcard}) {
  return (
    <>
        <div key={giftcard.id} className='card' >
              <h1 className='mb-4'>{giftcard.title} </h1>
              <div className='currency-container'>
                {
                  giftcard.currencies.map((cur) => (
                    <span className='currency'>{cur}</span>
                  ))
                }
              </div>
              
        </div>
      
      
        

        
      
    </>
  )
}

export default CardContent