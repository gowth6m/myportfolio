import "./PortfolioItem.css";

class PortfolioItem {
  key: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  filters?: string[];

  constructor(
    key: number,
    title: string,
    description: string,
    imageUrl: string,
    link: string,
    filters?: string[]
  ) {
    this.key = key;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.link = link;
    this.filters = ["all", ...filters!]; // forcing it to have 'all' filter
  }

  render() {
    return (
      <div key={this.key} className="portfolio-item-container">
        <img
          className="portfolio-item-background"
          alt="portfolioItemImg"
          src={
            process.env.PUBLIC_URL + "/assets/portfolio_assets/" + this.imageUrl
          }
        ></img>
        <div>{this.title}</div>
        <div>{this.description}</div>
      </div>
    );
  }
}

export default PortfolioItem;
