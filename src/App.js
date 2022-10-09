import './App.css';
import Header from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Foooter  from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header  />
      <main>
        <h1>
          Main
        </h1>
      </main>
      <Foooter />
    </div>
  );
}

export default App;
