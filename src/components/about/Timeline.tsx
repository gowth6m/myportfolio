import "./Timeline.css";

export function Timeline() {
  class TimelineItem {
    title: string;
    subtitle:string;

    constructor(title: string, subtitle: string) {
      this.title = title;
      this.subtitle = subtitle;
    }

    display() {
      return (
        <div className="about-timeline-item">
          <div className="about-timeline-item-container">
            <div className="about-timeline-item-context">
              {this.title}
              <br></br>
              {this.subtitle}
            </div>
          </div>
        </div>
      );
    }
  }

  let one = new TimelineItem('App Developer', 'University of Exeter');
  let two = new TimelineItem('Frontend Developer', 'Nocxa');
  let three = new TimelineItem('Software Developer', 'Swimstudios');

  return (
    <div className="about-timeline">
      {/* Items */}
      {one.display()}
      {two.display()}
      {three.display()}
    </div>
  );
}
