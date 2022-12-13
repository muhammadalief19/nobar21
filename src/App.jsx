import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="hero h-screen overflow-hidden" id="hero">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hi, Dude 👋</h1>
          <p className="mb-5">
            Selamat Datang di website Nobar21, situs nonton film legal gratis
            dan berkualitas
          </p>
          <a href="/movies" className="btn btn-primary">
            Film Page
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
