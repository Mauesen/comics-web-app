import React from 'react';


export const Item = ({name,stock,publisher,cover,price,issue}) => {
  return (

  <div className="col-md-3  col-6">

  
    <div className="card ">
      <div className="card-header text-center">
        <p className="no-dec" href="pages/comics/example/comic_view.html">{name} - <b>#{issue}</b></p>
  
      </div>
  
      <img className="img-fluid" src={cover} alt="Comic Novedad Demon Slayer"/>
  
      
  
    </div>
    

</div>


  )
       
  
};
