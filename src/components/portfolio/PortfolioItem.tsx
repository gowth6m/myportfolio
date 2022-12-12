import './PortfolioItem.css'

class PortfolioItem {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
    techStack?: string[];
  
    constructor(
      title: string,
      description: string,
      imageUrl: string,
      link: string,
      techStack?: string[]
    ) {
      this.title = title;
      this.description = description;
      this.imageUrl = imageUrl;
      this.link = link;
      this.techStack = techStack;
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
  