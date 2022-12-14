import { useState } from "react";
import "./Portfolio.css";
import PortfolioItem from "./PortfolioItem";

export function Portfolio() {
  let items: PortfolioItem[] = [];
  let filters: string[] = ["All", "Web", "Mobile", "Game", "Other"];
  const [currentFilter, setCurrentFilter] = useState("All");

  for (let i = 0; i < 10; i++) {
    items.push(
      new PortfolioItem(i, "item " + i, "description", "imageUrl", "link", [
        "Web",
        "Game",
        "All",
      ])
    );
  }

  return (
    <div className="portfolio-page flex">
      <div className="portfolio-page-container screen-max">
        <div className="portfolio-title section-title">
          Portfolio <span>.</span>
        </div>

        <div className="filters-container flex">
          {filters.map((filter) => (
            <div
              key={filter}
              className="filters-item"
              onClick={() => {
                console.log(filter);
                setCurrentFilter(filter);
              }}
            >
              {filter}
            </div>
          ))}
        </div>

        {/* rest of the stuff */}

        {items
          .filter((item) => item.filters?.includes(currentFilter))
          .map((item) => {
            return (
              <div key={item.key} className="portfolio-item">
                <div key={item.title} className="portfolio-item-image">
                  {item.display()}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
