import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import noImage from '../../assets/img/q-mark.jpg'
import { ItemCount } from '../ItemCount/ItemCount';

export const ItemDetail = ({producto,cover}) => {

  const [cantidad, setCantidad] = useState(0);

  

  function onAdd(cant){
    
    setCantidad(cant);
  }

  return (

    <div className="col-md-3  col-6">
  

      <div className="card ">
        <div className="card-header text-center">
          <p className="no-dec" href="pages/comics/example/comic_view.html">{producto.name} - <b>#{producto.issue}</b></p>
    
        </div>
    
        {/* 
            NO ME TRAE LAS IMÁGENES DE ENINGUNA FORMA :/
            
        <img className="img-fluid" src={cover} alt="Comic Novedad Demon Slayer"/>
        <img className="img-fluid" src={producto.cover} alt="Comic Novedad Demon Slayer"/> 
        
        */}
        <img className="img-fluid" src={noImage} alt={producto.name}/>
    
        <div className="card-footer ">
          <div >

            <div className='py-2'><b>Precio: </b>{producto.price}</div>
            <div className='py-2'><b>Editorial: </b>{producto.publisher}</div>
      

          </div>
          {
                    cantidad === 0 ?
                    <ItemCount stock={producto.stock} onAdd={onAdd} cantInicial={1}></ItemCount>                
                    : 
                    <div className="row">
                 
                      <div className='col-12 my-1'>Has agregado {cantidad} productos al carrito.</div>
                      <div className="col center my-1">

                        <Link to='/carrito'>
                                  <button className='btn btn-dark text-white'>Terminar compra</button>
                        </Link>

                      </div>
                    
                    </div>  
                           
                           
                        
                }
          
        
      </div>
    
      </div>
      
  
  </div>
  
  
    );
};
