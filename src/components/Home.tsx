import { useEffect, useState } from "react";
import "./Home.css";

export function Home() {
  const typingDelay: number = 100;
  const deletingDelay: number = 60;
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(typingDelay);
  const [index, setIndex] = useState(1);
  const period = 2000;

  const toRotate = [
    "likes to try new food",
    "likes problem solving",
    "is an App Developer at the University of Exeter",
    "loves the gym!",
    "is looking for new opportunities",
    "wants to get into Machine Learning",
    "loves to draw",
  ];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(deletingDelay);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(typingDelay);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="home-page flex">
      <div className="home-page-container">
        <div className="intro-info">
          <div className="title plax">
            I'm <span>Gowtham</span>
            <span className="title-span">.</span>
          </div>
          <div className="title-text plax">
            A programmer who <span className="typed-text"> </span>
            <span className="typingText">{text}</span>
            <span className="typed-text-cursor">|</span>
          </div>
        </div>
      </div>
    </div>
  );
}
