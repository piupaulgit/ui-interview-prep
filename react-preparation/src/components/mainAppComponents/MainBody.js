import "./mainBody.css";

const MainBody = ({ children }) => {
  return (
    <div className="mainBody">
      <p>{children}</p>
    </div>
  );
};
export default MainBody;
