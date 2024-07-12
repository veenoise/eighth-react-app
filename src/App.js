import logo from './assets/logo.png'

function App() {
  const styling = {
    width: "100vw"   
  }
  return (
    <div className="App">
      <h1>Task: Add an image below</h1>
      <img
        src={logo}
        style={styling}
        alt="Logo"
      />
    </div>
  );
}

export default App;
