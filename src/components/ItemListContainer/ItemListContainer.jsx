import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import  getProductos  from '../../assets/utilities/mock'
import { ItemList } from '../ItemList/ItemList'
import { Loading } from '../Loading/Loading'
import { Section } from '../Section/Section'

export const ItemListContainer = ({titulo}) => {

const [productos, setProductos] = useState ([])
const [loading, setloading] = useState(true)

const {idCategoria} = useParams();


useEffect(() => {
  
  if (idCategoria) {

    getProductos()
    .then(res => setProductos(res.filter(p=> p.publisher === idCategoria)))
    .catch(err => console.log(err))
    .finally(()=> setloading(false))
    
  }
  else{

    getProductos()
    .then(res => setProductos(res))
    .catch(err => console.log(err))
    .finally(()=> setloading(false))   

  }
  
  /* console.log(idCategoria) */


}, [idCategoria]);



return (
        
  
    <Section sectionId="novedades" titulo={titulo}>

      {loading ? <Loading/>:<ItemList productos={productos}/>}
    
    </Section>

)}