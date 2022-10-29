import "./App.scss";
import Header from "./components/Header";
import { Photo } from "./components/Photo";
import { Describe, Fish } from "./components/FishData";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <Photo></Photo>
        <Fish></Fish>
        <Describe></Describe>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
