import "./Home.css";

export function Home() {

  return (
    <div className="home-page flex">
      <div className="background-animation" id="background-animation">
        <canvas id="canvas"></canvas>
        <script src="./js/bgAnimate.js"></script>
      </div>
      <div className="home-title">Welcome!</div>
    </div>
  );
}
