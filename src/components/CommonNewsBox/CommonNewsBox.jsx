import { Link } from "react-router-dom";
import "./common-new-box.css";

const CommonNewsBox = ({ image, type, title, time = '', more, newsDetailsItem, styling = '', sizing = '', lineHeight = '' }) => {
  return (
    <div
      className="common-news-box"
      style={{ backgroundImage: `url(${image})`, height: styling, backgroundSize: 'cover', backgroundPosition: 'center' }}

    >
      <span className="type">{type}</span>
      <h2 className="title" style={{ fontSize: sizing, lineHeight: lineHeight }}>{title}</h2>
      {time && <div className="time">
        <i className="uil uil-calendar-alt"></i>
        <p>{time}</p>
      </div>}
      <Link to={`/CommonNewsDetailsPage/${newsDetailsItem}`}><span className="d-block text-white" style={{ cursor: 'pointer', fontSize: '13px' }}>{more}</span></Link>

    </div>
  );
};

export default CommonNewsBox;
