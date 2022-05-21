import "./App.css";
import Nav from "./Nav";

export default function Menu(props) {
  const setCurrentPage = props.setCurrentPage;

  return (
    <div>
      <div className="menu-container">
        <img className="menu" src="menu.jpg" alt="coffee-menu" />
      </div>
      <Nav currentTitle={"Menu"} setCurrentPage={setCurrentPage} />
      <img className="coffee-beans" src="coffee.jpg" alt="coffee" />
    </div>
  );
}
