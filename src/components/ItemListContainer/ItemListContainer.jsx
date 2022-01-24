import React, { useEffect, useState } from 'react'
import { getFetch } from '../../assets/utilities/mock'
import { ItemList } from '../ItemList/ItemList'
import { Loading } from '../Loading/Loading'

export const ItemListContainer = ({titulo}) => {

const [productos, setProductos] = useState ([])
const [loading, setloading] = useState(true)


useEffect(() => {
  
  getFetch
  .then(res => setProductos(res))
  .catch(err => console.log(err))
  .finally(()=> setloading(false))   
 


}, []);



return (
<div className="container">

    <h2 className="titulo "> {titulo}</h2>

    <div className="row">

        {loading ? <Loading></Loading>:
        
            productos.map( p =>

                <ItemList key={p.id} nombre={p.name} numero={p.issue} portada={p.cover} stock={p.stock}></ItemList>
            )
        
        
        }

        

    </div>



</div>
)
}