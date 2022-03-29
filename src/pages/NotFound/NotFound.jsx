import "./NotFound.scss";
import {Link} from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="not-found-container">
        <p className="not-found-text">This is not the web page you are looking for.</p>
        <div className="not-found-link">
          <Link to="/">Go to the home page</Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
