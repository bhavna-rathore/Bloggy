import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css"

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="top">
      <div className="topLeft">
        <a href="https://facebook.com" target="_blank" >
          <i className="topIcon fa-brands fa-square-facebook"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <i className="topIcon fa-brands fa-square-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <i className="topIcon fa-brands fa-square-instagram"></i>
        </a>
        <a href="https://pinterest.com" target="_blank" rel="noreferrer">
          <i className="topIcon fa-brands fa-square-pinterest"></i>
        </a>
      </div>

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">HOME</Link>
          </li>
          <li className="topListItem"> <Link className="link" to="/"> ABOUT</Link>
          </li>
          <li className="topListItem"><Link className="link" to="/contact">CONTACT</Link>
          </li>
          <li className="topListItem"><Link className="link" to="/write">WRITE</Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>

        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg" src={PF + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">LOGIN </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">REGISTER</Link>
            </li>
          </ul>
        )}
        <i className="topSearchicon fa-solid fa-magnifying-glass"></i>
      </div>

    </div>
  )
}









