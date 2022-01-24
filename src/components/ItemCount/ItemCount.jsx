import React, { useState } from 'react';
import comicImg from '../../assets/img/novedades/nov1.jpg'



export const ItemCount = ({nombre,numero}) => {

let stock = 5;

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

return <div className="col-md-3  col-6">

  

    <div className="card ">
      <div className="card-header text-center">
        <p className="no-dec" href="pages/comics/example/comic_view.html">{nombre} - <b>#{numero}</b></p>

      </div>

      <img className="img-fluid" src={comicImg} alt="Comic Novedad Demon Slayer"/>

      <div className="card-footer">
        <div className='row center'> 
          <input className='col-3' readOnly value={count} /> 
          <button className='btn text-white bg-dark mx-1 col-3' onClick={restar}>-</button>  
          <button className='btn text-white bg-dark mx-1 col-3' onClick={sumar}>+</button>
        </div>
        <div className='center py-2'>
          <button className='btn text-white bg-dark'>Agregar al Carrito</button>
        </div>
      </div>

    </div>

 


</div>;
};