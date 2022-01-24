import React, { useState } from 'react';




export const ItemCount = ({cantidad}) => {

let stock = cantidad;


const [count, setCount] = useState(0);

const sumar = ()=>{

  if (count < stock) {

    setCount(count +1);
    
  }
}

const restar = ()=>{

  if (count >= 1) {

    setCount(count -1);
    
  }
}

return  <div className="card-footer">
        <div className='row center'> 
          <input className='col-3' readOnly value={count} /> 
          <button className='btn text-white bg-dark mx-1 col-3' onClick={restar}>-</button>  
          <button className='btn text-white bg-dark mx-1 col-3' onClick={sumar}>+</button>
        </div>
        <div className='center py-2'>
          <button className='btn text-white bg-dark'>Agregar al Carrito</button>
        </div>
      </div>


};