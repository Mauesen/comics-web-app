import productos from './productos';


const getProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(productos), 2000);
    });
  };
  
  export default getProductos;
  