import "./Timeline.css";

export function Timeline() {
  class TimelineItem {
    id?:string;
    title: string;
    subtitle: string;
    logo: string;
    link: string;

    constructor(title: string, subtitle: string, logo: string, link: string, id?:string) {
      this.id = id;
      this.title = title;
      this.subtitle = subtitle;
      this.logo = logo;
      this.link = link;
    }

    openLink = (openLink: string) => {
      window.open(openLink);
    };

    display() {
      return (
        <div className="about-timeline-item">
          <div className="about-timeline-item-container">
            <div className="about-timeline-item-context">
              <div className="about-timeline-item-title">{this.title}</div>
              <div className="about-timeline-item-subtitle">
                {this.subtitle}
              </div>
              <img
                id={this.id}
                onClick={() => this.openLink(this.link)}
                className="about-timeline-item-logo"
                src={process.env.PUBLIC_URL + "/assets/" + this.logo}
                alt="work-logo"
              />
            </div>
          </div>
        </div>
      );
    }
  }

  let one = new TimelineItem(
    "App Developer",
    "@University of Exeter",
    "uoe_logo.svg",
    "https://www.exeter.ac.uk/"
  );
  let three = new TimelineItem(
    "Software Developer",
    "@Nocxa",
    "nocxa_logo_b.svg",
    "https://nocxa.com/"
  );
  let two = new TimelineItem(
    "Frontend Developer",
    "@Swimstudios",
    "swmstudios_logo.png",
    "https://swmstudios.com/",
    "swmstudios"
  );

  return (
    <div className="about-timeline">
      {/* Items */}
      {one.display()}
      {two.display()}
      {three.display()}
    </div>
  );
}
