import React, { useEffect, useState } from 'react';
import getProductos from '../../assets/utilities/mock';
import { ItemDetail } from '../ItemDetail/ItemDetail';





export const ItemDetailContainer = () => {

  const [producto, setProducto] = useState({});

  const productoId = '1';

  useEffect(() => {
    
    getProductos()
    .then(res => setProducto(res))
    .then((data) => {
      setProducto(data.find((item) => item.id === productoId));
    })
    .catch((err) => console.log(err));
  }, []);
  
 


  return (

    <ItemDetail producto={producto}></ItemDetail>
  );
};
