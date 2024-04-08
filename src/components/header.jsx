import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header>
      <nav class="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Fullerton Fabrication
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/portfolio" className="nav-link">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
