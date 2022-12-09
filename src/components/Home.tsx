import "./Home.css";

export function Home() {
  return (
    <div className="home-page flex">
      <div className="intro-info">
        <div className="title plax">
          I'm <span>Gowtham</span>
          <span className="title-span">.</span>
        </div>
        <div className="title-text plax">
          A programmer who <span className="typed-text"> </span>
          <span className="typed-text-cursor">|</span>
        </div>
      </div>
    </div>
  );
}
