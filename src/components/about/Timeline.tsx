import { motion, Variants } from "framer-motion";
import "./Timeline.css";

export function Timeline() {
  let one = new TimelineItem(
    "App Developer",
    "@University of Exeter",
    "uoe_logo.svg",
    "https://www.exeter.ac.uk/",
    "May 2022 - Present"
  );
  let three = new TimelineItem(
    "Software Developer",
    "@Nocxa",
    "nocxa_logo_b.svg",
    "https://nocxa.com/",
    "Sep 2019 - Feb 2021"
  );
  let two = new TimelineItem(
    "Frontend Developer",
    "@Swimstudios",
    "swmstudios_logo.png",
    "https://swmstudios.com/",
    "Mar 2021 - Nov 2021",
    "swmstudios"
  );

  return (
    <div className="about-timeline-container">
      <div className="about-timeline">
        {/* Items */}
        {one.display()}
        {two.display()}
        {three.display()}
      </div>
    </div>
  );
}

class TimelineItem {
  id?: string;
  title: string;
  subtitle: string;
  logo: string;
  link: string;
  date: string;

  constructor(
    title: string,
    subtitle: string,
    logo: string,
    link: string,
    date: string,
    id?: string
  ) {
    this.id = id;
    this.title = title;
    this.subtitle = subtitle;
    this.logo = logo;
    this.link = link;
    this.date = date;
  }

  openLink = (openLink: string) => {
    window.open(openLink);
  };

  display() {
    return (
      <motion.div
        className="about-timeline-item"
        transition={{
          duration: 0.8,
          delay: 0,
        }}
        initial="offscreen"
        whileInView="onscreen"
        variants={itemVariants}
      >
        <div className="about-timeline-item-container">
          <div className="about-timeline-item-context">
            <div className="about-timeline-item-title">{this.title}</div>
            <div className="about-timeline-item-subtitle">{this.subtitle}</div>
            <img
              id={this.id}
              onClick={() => this.openLink(this.link)}
              className="about-timeline-item-logo"
              src={process.env.PUBLIC_URL + "/assets/" + this.logo}
              alt="work-logo"
            />
            <div className="row about-timeline-item-bottom">
              <div className="about-timeline-item-dates">{this.date}</div>
              <div className="about-timeline-item-btn">Details</div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}

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