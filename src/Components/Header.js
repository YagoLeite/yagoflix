import "./Header.css";

export default (props) => {
  return (
    <header className={props.black ? "black" : ""}>
      <div className="header--logo">
        <a href="/">
          <img src={process.env.PUBLIC_URL + "/yagoflixLogo.jpeg"} alt="logo" />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
            alt="user image"
          />
        </a>
      </div>
    </header>
  );
};
