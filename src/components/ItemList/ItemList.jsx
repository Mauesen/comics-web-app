import React from 'react';
import { ItemCount } from '../ItemCount/ItemCount';

export const ItemList = ({nombre,numero,portada,stock}) => {
  
    return <div className="col-md-3  col-6">

  

  <div className="card ">
    <div className="card-header text-center">
      <p className="no-dec" href="pages/comics/example/comic_view.html">{nombre} - <b>#{numero}</b></p>

    </div>

    <img className="img-fluid" src={portada} alt="Comic Novedad Demon Slayer"/>

    <ItemCount cantidad={stock}></ItemCount>

  </div>




</div>;
};
