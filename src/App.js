import "./App.css";
import Container from "./components/container/Container";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden p-0 m-0 bg-white font-inter">
      <Header />
      <Container />
    </div>
  );
}

export default App;
