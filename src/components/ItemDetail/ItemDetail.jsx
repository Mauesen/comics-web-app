import React from 'react';

export const ItemDetail = (producto) => {

  
  return (

    <div className="col-md-3  col-6">
  
    
      <div className="card ">
        <div className="card-header text-center">
          <p className="no-dec" href="pages/comics/example/comic_view.html">{producto.name} - <b>#{producto.issue}</b></p>
    
        </div>
    
        <img className="img-fluid" src={producto.cover} alt="Comic Novedad Demon Slayer"/>
    
        
    
      </div>
      
  
  </div>
  
  
    );
};
