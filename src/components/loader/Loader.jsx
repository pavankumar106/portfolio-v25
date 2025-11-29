import "./Loader.module.scss";

const Loader = ({ text = "Loading..." }) => {
  return (
    <div
      className="loader loader-small"
      role="status"
      area-live="polite"
      area-busy="true"
    >
      <div className="loader__spinner" />
      <div className="loader__text">{text}</div>
    </div>
  );
};

export default Loader;
