import { motion, Variants } from "framer-motion";
import "./PortfolioItem.css";

class PortfolioItem {
  key: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  github: string;
  filters?: string[];

  constructor(
    key: number,
    title: string,
    description: string,
    imageUrl: string,
    link: string,
    github: string,
    filters?: string[]
  ) {
    this.key = key;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.link = link;
    this.github = github;
    this.filters = ["all", ...filters!]; // forcing it to have 'all' filter
  }

  render() {
    return (
      <motion.div
        key={this.key}
        className="portfolio-item-container"
        transition={{
          duration: 1,
          delay: 0,
        }}
        viewport={{ once: true }}
        initial="offscreen"
        whileInView="onscreen"
        variants={this.key % 2 === 1 ? itemVariants : itemVariants}
      >
        <img
          loading="lazy"
          className="portfolio-item-img"
          alt="portfolioItemImg"
          src={
            process.env.PUBLIC_URL + "/assets/portfolio_assets/" + this.imageUrl
          }
        ></img>
        <div className="portfolio-item-details flex">
          <div className="portfolio-item-title">{this.title}</div>
        </div>
        {/* <div className="portfolio-item-bot">
          <div></div>
        </div> */}
      </motion.div>
    );
  }
}

// const itemVariants: Variants = {
//   offscreen: {
//     x: "100%",
//   },
//   onscreen: {
//     x: 0,
//     transition: {
//       type: "spring",
//       bounce: 0.4,
//       duration: 0.8,
//     },
//   },
// };

// const itemVariantsLeft: Variants = {
//   offscreen: {
//     x: "-100%",
//   },
//   onscreen: {
//     x: 0,
//     transition: {
//       type: "spring",
//       bounce: 0.4,
//       duration: 0.8,
//     },
//   },
// };

const itemVariants: Variants = {
  offscreen: {
    scale: 0,
  },
  onscreen: {
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 1,
    },
  },
};

export default PortfolioItem;
