import images from "./data";
import "./App.css";
import Carousel from "./components/Carousel";
import Navabar from "./components/Navbar/Navabar";

function App() {
  // console.log(images);
  return (
    <>
      <Navabar />
      <div className="carousel-container">
        {images &&
          images.map((arr, index) => {
            return <Carousel images={arr} isFirst={index === 0} key={index} />;
          })}
      </div>
    </>
  );
}

export default App;
