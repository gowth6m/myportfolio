import { useState } from "react";
import "./Portfolio.css";
import PortfolioItem from "./PortfolioItem";

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
    title: "Stugether",
    description: "App developed using Django",
    imageUrl: "uoe_app.jpg",
    link: "https://m.exeter.ac.uk",
    github: "",
    filters: ["web"],
  },
];

export function Portfolio() {
  let items: PortfolioItem[] = [];
  let filters: string[] = ["all", "web", "mobile", "data", "game", "other"];
  const [currentFilter, setCurrentFilter] = useState("all");

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
            .map((item, index) => {
              return item.render();
            })}
        </div>
      </div>
    </div>
  );
}

type FilterItemProps = {
  title: string;
  initialClicked: boolean;
  setCurrentFilter: React.Dispatch<React.SetStateAction<string>>;
  currentFilter: string;
};

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
