import { useNavigate } from "react-router-dom";
import PortfolioItem from "./PortfolioItem";
import './Portfolio'

const data = [
  {
    key: 0,
    title: "University of Exeter App",
    description: "App developed using Flutter",
    imageUrl: "uoe_app.jpg",
    link: "https://m.exeter.ac.uk",
    github: "",
    filters: ["web", "mobile"],
  },
  {
    key: 1,
    title: "Reddit Viewer",
    description: "App developed using Flutter",
    imageUrl: "reddit_app.png",
    link: "https://gowth6m.github.io/reddit-viewer/",
    github: "https://github.com/gowth6m/reddit-viewer",
    filters: ["web", "mobile"],
  },
  {
    key: 2,
    title: "Stugether",
    description: "App developed using Django",
    imageUrl: "stugether_app.png",
    link: "https://stugether.herokuapp.com/",
    github: "https://github.com/gowth6m/gravity-simulator",
    filters: ["web"],
  },
  {
    key: 3,
    title: "Zombie Maze",
    description: "Game developed using PyGame",
    imageUrl: "zombie_maze.gif",
    link: "",
    github: "https://github.com/gowth6m/zombie-maze",
    filters: ["game"],
  },
];

export function PortfolioPreview() {
  const navigate = useNavigate();
  const handleNavigate = (route: string) => navigate("/" + route);
  let items: PortfolioItem[] = [];
  for (let i = 0; i < data.length; i++) {
    items.push(
      new PortfolioItem(
        data[i].key,
        data[i].title,
        data[i].description,
        data[i].imageUrl,
        data[i].link,
        data[i].github,
        data[i].filters
      )
    );
  }

  return (
    <div className="portfolio-preview flex">
      <div className="portfolio-preview-container screen-max">
        <div className="portfolio-title section-title">
          Portfolio <span>.</span>
        </div>

        <div className="portfolio-items-container">
          {items.map((item, index) => {
            return item.render();
          })}
        </div>

        <div className="portfolio-preview-view-more" onClick={
          ()=>{handleNavigate('portfolio');}
        }>
          View More <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
}
