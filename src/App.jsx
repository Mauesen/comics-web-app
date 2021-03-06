
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Cart } from './components/Cart/Cart';
import {Header} from './components/Header/Header';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'


const App = ()=> {
  return (

    <BrowserRouter>
      <div className="App">

        <Header/>
        <main>
          <Routes>

            <Route exact path='/' element={ <ItemListContainer   titulo="Novedades"/> }/> 
            <Route exact path='/categoria/:idCategoria' element={ <ItemListContainer titulo="Categoría"/> }/>
            <Route exact path='/detalle/:idProducto' element={ <ItemDetailContainer titulo="Detalle" /> }/> 
            <Route exact path='/carrito' element={ <Cart titulo="Novedades"/> }/> 
           
          </Routes>
        </main>
        
      </div>
    </BrowserRouter>
  );
}

export default App;


