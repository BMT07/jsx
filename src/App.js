import logo from './logo.svg';
import './App.css';
import image from "imageInSrc.jpg";
import "./style.css";

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black,max-width:100vw"}}></div>

<h1 className="title red">Your name here</h1>

<br ></br>

<img src={image} ></img>

<br>

<img src="/imageInPublic.jpg">

</img>

<video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" ></source>

</video>
    </div>
  );
}

export default App;
