import "./Portfolio.css";
import PortfolioItem from "./PortfolioItem";

export function Portfolio() {
  let data: PortfolioItem[] = [];

  for (let i = 0; i < 10; i++) {
    data.push(
      new PortfolioItem("item " + i, "description", "imageUrl", "link")
    );
  }

  return (
    <div className="portfolio-page flex">
      <div className="portfolio-page-container">
        <div className="portfolio-title section-title">
          Portfolio <span>.</span>
        </div>

        {/* rest of the stuff */}

        {data.map((item) => {
          return (
            <div className="portfolio-item">
              <div className="portfolio-item-image">{item.display()}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

