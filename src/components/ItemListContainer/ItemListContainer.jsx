import React, { useEffect, useState } from 'react'
import { getFetch } from '../../assets/utilities/mock'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemListContainer = ({titulo}) => {

const [productos, setProductos] = useState ([])
const [loading, setloading] = useState(true)


useEffect(() => {
  
  getFetch
  .then(res => setProductos(res))
  .catch(err => console.log(err))
  //.then(respuesta => console.log(respuesta))
  .finally(()=> setloading(false))   
  //console.log('api')     


}, []);



return (
<div className="container">

    <h2 className="titulo "> {titulo}</h2>

    <div className="row">

        {loading ? <h2>cargando</h2>:
        
            productos.map( p =>

                <ItemCount key={p.id} nombre={p.name} numero={p.issue}></ItemCount>
            )
        
        
        }

        

    </div>



</div>
)
}