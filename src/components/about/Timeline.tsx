import "./Timeline.css";

export function Timeline() {
  class TimelineItem {
    title: string;
    subtitle: string;
    logo:string

    constructor(title: string, subtitle: string, logo:string) {
      this.title = title;
      this.subtitle = subtitle;
      this.logo = logo;
    }

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

  let one = new TimelineItem("App Developer", "University of Exeter", "uoe_logo.svg");
  let two = new TimelineItem("Frontend Developer", "Nocxa", "nocxa_logo_b.svg");
  let three = new TimelineItem("Software Developer", "Swimstudios", "uoe_logo.svg");

  return (
    <div className="about-timeline">
      {/* Items */}
      {one.display()}
      {two.display()}
      {three.display()}
    </div>
  );
}
