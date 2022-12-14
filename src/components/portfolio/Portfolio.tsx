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

  return (
    <div className="portfolio-page flex">
      <div className="portfolio-page-container screen-max">
        <div className="portfolio-title section-title">
          Portfolio <span>.</span>
        </div>

        {/* Filters */}
        <div className="filters-container flex">
          {filters.map((filter, index) => (
            <FilterItem
              key={index}
              title={filter}
              initialClicked={filter === "all" ? true : false}
              setCurrentFilter={setCurrentFilter}
              currentFilter={currentFilter}
            />
          ))}
        </div>

        {/* Filtered Items */}
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

interface FilterItemProps {
  title: string;
  initialClicked: boolean;
  setCurrentFilter: React.Dispatch<React.SetStateAction<string>>;
  currentFilter: string;
}

export function FilterItem({
  title,
  initialClicked,
  setCurrentFilter,
  currentFilter,
}: FilterItemProps) {
  const [isClicked, setIsClicked] = useState(initialClicked);

  return (
    <div
      className={
        isClicked && currentFilter === title
          ? "filters-item filters-item-active"
          : "filters-item"
      }
      onClick={() => {
        setCurrentFilter(title);
        if (currentFilter !== title) {
          setIsClicked(false);
        }
        setIsClicked(true);
      }}
    >
      {title}
    </div>
  );
}
