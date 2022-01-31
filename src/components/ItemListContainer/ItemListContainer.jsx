import React, { useEffect, useState } from 'react'
import  getProductos  from '../../assets/utilities/mock'
import { ItemList } from '../ItemList/ItemList'
import { Loading } from '../Loading/Loading'
import { Section } from '../Section/Section'

export const ItemListContainer = ({titulo}) => {

const [productos, setProductos] = useState ([])
const [loading, setloading] = useState(true)


useEffect(() => {
  
    getProductos()
  .then(res => setProductos(res))
  .catch(err => console.log(err))
  .finally(()=> setloading(false))   
 


}, []);



return (
        
    <Section sectionId="novedades" titulo="Novedades" innerSection={loading ? <Loading/>:<ItemList productos={productos}/>}/>

)}