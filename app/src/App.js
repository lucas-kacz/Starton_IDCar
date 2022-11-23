import Connect from "./components/Connect/Connect";

function App() {

  return (
    <div className="App" onLoad={window.scrollTo(0, 0)}>
      <div className="nav">
      </div>
      <div className="title_block">
        <img src="https://sunil.fr/logo.png" alt="idcar-logo" className="logo" />
      </div>
      <Connect></Connect>
      <div className="footer">
        <p>
          Created with <span className="heart" id="heart">♥</span> for the Online Web3 Starton Hackathon
          <br></br><br></br>
          Copyright ©IdCar - November 2022  
        </p>
      </div>
    </div>
  );
}

export default App;