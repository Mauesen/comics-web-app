import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getProductos from '../../assets/utilities/mock';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { Section } from '../Section/Section';
import { Loading } from '../Loading/Loading'





export const ItemDetailContainer = ({titulo}) => {

  const [producto, setProducto] = useState({});
  const [loading, setloading] = useState(true)


  const {idProducto} = useParams();


  useEffect(() => {


    if (idProducto) {

      getProductos()
      .then(res => setProducto(res.find(p=> p.id === idProducto)))
      .catch(err => console.log(err))
      .finally(()=> setloading(false))
      
      
    }
    else{
  
      getProductos()
      .then(res => setProducto(res))
      .catch(err => console.log(err))
      .finally(()=> setloading(false))   
  
    }
    
   
  }, [idProducto]);
  

  return (

    <Section sectionId="novedades" titulo={titulo} subtitulo={producto.name} >

      {loading ? <Loading/>:<ItemDetail cover={producto.cover} producto={producto}></ItemDetail>}
      
    </Section>

   
  );
};
