import "./common-new-box.css";

const CommonNewsBox = ({ image, type, title, time, styling = '', sizing = '', lineHeight = '' }) => {
  return (
    <div
      className="common-news-box"
      style={{ backgroundImage: `url(${image})`, height: styling }}
     
    >
      <span className="type">{type}</span>
      <h2 className="title" style={{fontSize : sizing, lineHeight : lineHeight}}>{title}</h2>
      <div className="time">
        <i className="uil uil-calendar-alt"></i> 
        <p>{time}</p>
      </div>
    </div>
  );
};

export default CommonNewsBox;
