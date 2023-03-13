
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';

function App() {
  return (

    <>

      <div class="container text-center mt-5">

        <Navbar />

        <h1>Gallary</h1>

        <div className='row'>

          {Array.apply(null, { length: 9 }).map(() => <Card />)}

        </div>

      </div>

    </>
  );
}

export default App;
