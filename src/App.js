import logo from './logo.svg';
import './App.css';
import Player from './Player'

function App() {

  // Test data
  let props = {
    divId: "videoContainer",
    width: "900", 
    height: "650"
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Video Player UI built with React.js <img src={logo} className="App-logo" alt="logo" /></h2>
      </header>

      <body className="App-body">
        
        <div id="videoContainer">
          <Player {...props}></Player>
        </div>

      </body>
    </div>
  );
}

export default App;
