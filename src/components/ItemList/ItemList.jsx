import React from 'react';
import { Item } from '../Item/Item';


export const ItemList = ({productos}) => {
  
    return (
            <>
            
                {
                    productos.map((p) => <Item key={p.id} id={p.id} stock={p.stock} publisher={p.publisher} name={p.name} issue={p.issue} cover={p.cover} price={p.price}></Item>
                        
                        
                    )
                }
            </>

    )
    
};
