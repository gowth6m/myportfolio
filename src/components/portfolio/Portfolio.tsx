import { useState } from "react";
import "./Portfolio.css";
import PortfolioItem from "./PortfolioItem";

export function Portfolio() {
  let items: PortfolioItem[] = [];
  let filters: string[] = ["all", "web", "mobile", "data", "game", "other"];
  const [currentFilter, setCurrentFilter] = useState("all");

  for (let i = 0; i < 10; i++) {
    items.push(
      new PortfolioItem(i, "item " + i, "description", "imageUrl", "link", [
        "game",
        "web",
      ])
    );
  }

  // const [isFilterActive, setIsFilterActive] = useState(false);

  // const setFilterActive =(key:string) => {
  //   setIsFilterActive(current => !current);
  // };

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

        <div className="portfolio-items-container">
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
    </div>
  );
}
