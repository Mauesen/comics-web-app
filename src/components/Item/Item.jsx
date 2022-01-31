import React from 'react';


export const Item = ({name,stock,publisher,cover,price,issue}) => {
  return (

  <div className="col-md-3  col-6">

    <div className="card ">
      
      <div className="card-header text-center">
        
        <p className="no-dec" >{name} - <b>#{issue}</b></p>
  
      </div>
  
      <img className="img-fluid" src={cover} alt="Comic Novedad Demon Slayer"/>
  
      <div className="card-footer ">
        <div className='d-flex justify-content-around'>

        <div className='my-auto'><b>Precio: </b>{price}</div>
        <button className='btn btn-dark text-white'>Ver Detalle</button>

        </div>
        
      </div>
    </div>
    
</div>


)};
       
  

