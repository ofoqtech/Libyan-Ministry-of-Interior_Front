import "./main-title.css";

const MainTitle = ({ title, sizing = '' }) => {
  return (
    <div className="main-title">
      <h1 className="title" style={{fontSize : sizing}}>{title}</h1>
      
      <div className="lines">
        <span className="line"></span>
        <span className="line"></span>
      </div>
      
    </div>
  );
};

export default MainTitle;
