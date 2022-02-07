import React, { useState } from 'react';




export const ItemCount = ({stock,onAdd,cantInicial}) => {


const [count, setCount] = useState(cantInicial);


const agregarALCarrito=()=>{
  onAdd(count)
}



const handleAumentar = ()=>{

  if (count < stock) {

    setCount(count +1);
    
  }
}

const handlerRestar = ()=>{

  if (count > cantInicial) {

    setCount(count -1);
    
  }
}

return  <div className="card-footer">
        <div className='row center'> 
          <div className='col-3' > {count}</div>
          <button className='btn text-white bg-dark mx-1 col-3' onClick={handlerRestar}>-</button>  
          <button className='btn text-white bg-dark mx-1 col-3' onClick={handleAumentar}>+</button>
        </div>
        <div className='center py-2'>
          <button className='btn text-white bg-dark' onClick={agregarALCarrito}>Agregar al Carrito</button>
        </div>
      </div>


};