import "./App.scss";
// import Header from "./components/Header";
// import { Photo } from "./components/Photo";
// import { Describe, Fish } from "./components/FishData";
// import Footer from "./components/Footer";
import StarRating from "./components/Stars";
import StarClRating from "./components/StarClRating";

function App() {
  return (
    <>
      {/* <Header></Header>
      <div className="container">
        <Photo></Photo>
        <Fish></Fish>
        <Describe></Describe>
      </div>
      <Footer></Footer> */}
      <StarRating></StarRating>
      <StarClRating initRate={5} />
    </>
  );
}

export default App;
