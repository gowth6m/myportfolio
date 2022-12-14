import './PortfolioItem.css'

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
      this.filters = filters;
    }
  
    display() {
      return (
        <>
          <div className="portfolio-item-container">
            <div>{this.title}</div>
            {/* <div>this.description</div> */}
          </div>
        </>
      );
    }
  }

  export default PortfolioItem;
  