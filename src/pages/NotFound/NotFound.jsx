import {Link} from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <p className="not-found-text">This is not the web page you are looking for.</p>
      <Link className="not-found-link" to="/">
        Go to the home page
      </Link>
    </>
  );
};

export default NotFound;
