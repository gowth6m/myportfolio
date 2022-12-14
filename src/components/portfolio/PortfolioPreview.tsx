import { useNavigate } from "react-router-dom";

export function PortfolioPreview() {
  const navigate = useNavigate();
  const handleNavigate = (route: string) => navigate("/" + route);

  return (
    <div className="portfolio-preview flex">
      <div className="portfolio-preview-container screen-max">
        <div className="portfolio-title section-title">
          Portfolio <span>.</span>
        </div>

        
      </div>
    </div>
  );
}
