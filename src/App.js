
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';

function App() {

  const photos = [
    'https://picsum.photos/id/1001/200/200',
    'https://picsum.photos/id/1002/200/200',
    'https://picsum.photos/id/1003/200/200',
    'https://picsum.photos/id/1004/200/200',
    'https://picsum.photos/id/1005/200/200',
    'https://picsum.photos/id/1006/200/200'
  ]

  return (

    <>

      <div class="container text-center mt-5">

        <Navbar />

        <h1>Gallary</h1>

        <div className='row'>

          {photos.map((photo) => <Card  src={photo} />)}

        </div>

      </div>

    </>
  );
}

export default App;
