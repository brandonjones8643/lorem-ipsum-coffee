import "./App.css";

export default function Nav(props) {
  const setCurrentPage = props.setCurrentPage;
  const navButtonTitles = ["About", "Menu", "Contact"];
  const currentTitle = props.currentTitle;

  const removeTitle = (arr, value) => {
    return arr.filter(function (e) {
      return e !== value;
    });
  };
  const newNavButtonTitles = removeTitle(navButtonTitles, currentTitle);

  return (
    <div className="nav">
      <button className="nav-button" onClick={() => setCurrentPage("Home")}>
        Home
      </button>
      <button
        className="nav-button"
        onClick={() => setCurrentPage(newNavButtonTitles[0])}
      >
        {newNavButtonTitles[0]}
      </button>
      <button
        className="nav-button"
        onClick={() => setCurrentPage(newNavButtonTitles[1])}
      >
        {newNavButtonTitles[1]}
      </button>
    </div>
  );
}
