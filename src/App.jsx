
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {Header} from './components/Header/Header';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'


const App = ()=> {
  return (

    <BrowserRouter>
      <div className="App">

        <Header></Header>
        <main>
          <Routes>

            <Route path='/' element={ <ItemListContainer titulo="Novedades"/>}/> 
          
           
          </Routes>
        </main>
        
      </div>
    </BrowserRouter>
  );
}

export default App;


