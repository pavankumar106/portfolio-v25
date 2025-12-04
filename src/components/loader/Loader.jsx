import "./Loader.scss";

const Loader = ({ text = "Loading..." }) => {
  return (
    <div className="custom-loadmask">
      <div className="loader"></div>
      <div className="loader-text">{text}</div>
    </div>
  );
};

export default Loader;
