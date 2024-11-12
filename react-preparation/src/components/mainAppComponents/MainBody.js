import "./mainBody.css";

const MainBody = ({ children }) => {
  return (
    <div className="mainBody">
      <div>{children}</div>
    </div>
  );
};
export default MainBody;
