import "./App.css";
import Nav from "./Nav";

export default function About(props) {
  const setCurrentPage = props.setCurrentPage;

  return (
    <div>
      <h1 className="about-title">About</h1>
      <h3 className="about-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </h3>
      <footer className="about-footer">-Lorem Ipsum Coffee</footer>
      <Nav currentTitle={"About"} setCurrentPage={setCurrentPage} />
      <img className="coffee-beans" src="coffee.jpg" alt="coffee" />
    </div>
  );
}
