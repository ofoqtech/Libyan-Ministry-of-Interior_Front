import "./main-title.css";

const MainTitle = ({ title }) => {
  return (
    <div className="main-title">
      <h1 className="title">{title}</h1>
      
      <div className="lines">
        <span className="line"></span>
        <span className="line"></span>
      </div>
      
    </div>
  );
};

export default MainTitle;
