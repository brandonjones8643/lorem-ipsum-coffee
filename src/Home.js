import "./App.css";
import {
  EmailShareButton,
  FacebookShareButton,
  PinterestShareButton,
  TumblrShareButton,
  TwitterShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  PinterestIcon,
  TumblrIcon,
  TwitterIcon,
} from "react-share";

export default function Home(props) {
  const setCurrentPage = props.setCurrentPage;

  return (
    <div className="home">
      <video
        className="coffee-mp4"
        src="coffee.mp4"
        loop={true}
        autoPlay="autoplay"
        muted
      >
        You are using a browser that does not support video elements.
      </video>
      <div className="content">
        <h1 className="title">L.I. Coffee</h1>
        <div className="home-page-buttons">
          <button
            className="home-page-button"
            onClick={() => setCurrentPage("About")}
          >
            About
          </button>
          <button
            className="home-page-button"
            onClick={() => setCurrentPage("Menu")}
          >
            Menu
          </button>
          <button
            className="home-page-button"
            onClick={() => setCurrentPage("Contact")}
          >
            Contact
          </button>
        </div>
      </div>
      <div className="share-buttons">
        <FacebookShareButton
          className="share-button"
          url={"http://www.licoffee017.com"}
        >
          <FacebookIcon round={true} size={36} />
        </FacebookShareButton>
        <EmailShareButton
          className="share-button"
          url={"http://www.licoffee017.com"}
        >
          <EmailIcon round={true} size={36} />
        </EmailShareButton>
        <PinterestShareButton
          className="share-button"
          url={"http://www.licoffee017.com"}
        >
          <PinterestIcon round={true} size={36} />
        </PinterestShareButton>
        <TumblrShareButton
          className="share-button"
          url={"http://www.licoffee017.com"}
        >
          <TumblrIcon round={true} size={36} />
        </TumblrShareButton>
        <TwitterShareButton
          className="share-button"
          url={"http://www.licoffee017.com"}
        >
          <TwitterIcon round={true} size={36} />
        </TwitterShareButton>
      </div>
    </div>
  );
}
