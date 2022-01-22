
import './App.css';
import {Header} from './components/Header/Header';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'


const App = ()=> {
  return (
    <div className="App">

      <Header></Header>
      <main>

        <section id="novedades">
          <ItemListContainer titulo="Novedades"></ItemListContainer>
        </section>
      </main>
      
    </div>
  );
}

export default App;


