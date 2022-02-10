import "./App.css";
import Example from "./components/example";
import GoogleLogin from "react-google-login";
//1085897457627-09537qfb2nl4u3bosi9qoe5vlbagosk1.apps.googleusercontent.com
function App() {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Example />
        <GoogleLogin
          clientId="1085897457627-09537qfb2nl4u3bosi9qoe5vlbagosk1.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </header>
    </div>
  );
}

export default App;
