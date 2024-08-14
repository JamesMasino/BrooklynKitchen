import "./overlay.css";

export function Overlay({ isDivVisible }) {
  return (
    <div className="screen">
      <div className="largeColumn">
        <div className="block">
          <span className="title">
            It's about the <span className="styleText">little</span> moments
          </span>
        </div>
        <div className="block">
          <span className="subTitle">MAUVE x DR. COFFEE</span>
        </div>
      </div>
      {isDivVisible && (
        <div className="smallColumn">
          <div className="model"></div>
        </div>
      )}
    </div>
  );
}
