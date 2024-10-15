import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={`${process.env.PUBLIC_URL}/images/logo.webp`} alt="Logo" id='logo' />
        <p>
          Vidrip: Download local news video.
        </p>
        <form>
          <input type="text" id="dlink" name="dlink" placeholder='https://www.cp24.com/video/2024/10/14/scott-mission-serving-thanksgiving-meals-to-those-in-need/' />
        </form>
        <button type="button">Download</button>
      </header>
    </div>
  );
}

export default App;
