import React from "react";
import "./Header.scss";
import logo from "./logo.svg";
import { Link } from "react-router-dom";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    }
  })
);

const Header: React.FC = () => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <header className="App-header">
      <div className="Logo-section">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <span className="Title">MBA</span>
          <br />
          <span className="Title-details">Enterprise, LLC.</span>
        </p>
      </div>
      <div className="Contact">
        <div className="Contact-section Phone">

        <h4>Phone : </h4>
          <a href="tel:1-575-200-9824"> (575)-200-9824</a>
        </div>
        <br></br>
        <div className="Contact-section">
          <h4>Email : </h4>
          <a  href="mailto:mba_enterprise@hotmail.com"> mba_enterprise@hotmail.com</a> 
          
        </div>
          
      </div>

      <nav className="Navbar">
        <ul className="navbar-nav mr-auto">
          <li>
            <Link to={"/"} className="nav-link">
              {" "}
              Home{" "}
            </Link>
          </li>
          <li>
            <p onClick={handleOpen} className="nav-link">
              Contact
            </p>
          </li>
          <li>
            <Link to={"/about"} className="nav-link">
              About
            </Link>
          </li>
        </ul>
      </nav>

      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Contact Us</h2>
          <p id="simple-modal-description">
            Please Enter in your contact information so we can contact you back.
            <table>
              <tr>
                <td>Name :</td>
                <td>
                  <input></input>
                </td>
              </tr>
              <tr>
                <td>Email Address :</td>
                <td>
                  <input></input>
                </td>
              </tr>
              <tr>
                <td>Phone Number :</td>
                <td>
                  <input></input>
                </td>
              </tr>

              <tr>
                <td>Additional Info :</td>
                <td>
                  <textarea></textarea>
                </td>
              </tr>
            </table>
          </p>
        </div>
      </Modal>
    </header>
  );
};

export default Header;
