import "./App.css";
import Nav from "./Nav";

export default function Contact(props) {
  const setCurrentPage = props.setCurrentPage;
  const phoneNumber = "(000)-000-0000";

  return (
    <div>
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact-info">
        <h4>Phone: {phoneNumber}</h4>
        <h4>Email: loremCoffee@placeholder.com</h4>
        <div className="form-container">
          <form>
            <label>First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
            ></input>

            <label>Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            ></input>

            <label>Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
            ></textarea>

            <input type="submit" value="Submit"></input>
          </form>
        </div>
        <img className="coffee-beans" src="coffee.jpg" alt="coffee" />
      </div>
      <Nav currentTitle={"Contact"} setCurrentPage={setCurrentPage} />
    </div>
  );
}
