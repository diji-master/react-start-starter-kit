import logo from "./logo.svg";
// import "./App.css";

function App() {
  return (
    <div className="App">
      <h3>{process.env.NODE_ENV}</h3>
      <p>{process.env.REACT_APP_API_URL}</p>
      {process.env.NODE_ENV === "development" && (
        <div>
          <img src="/logo192.png" alt="Logo" />
          <img src={logo} alt="Logo" />
        </div>
      )}
    </div>
  );
}

export default App;
