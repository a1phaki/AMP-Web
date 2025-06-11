import { NavLink, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  const getPageName = (pathname) => {
    switch (pathname) {
      case '/':
        return 'Home';
      case '/introduction':
        return 'Introduction';
      case '/tutorial':
        return 'Tutorial';
      case '/download':
        return 'Download';
      default:
        return '';
    }
  };

  const pageName = getPageName(location.pathname);

  return (
    <div className="container">
      <div className="sticky-top bg-white">
        <nav className="navbar navbar-expand-lg navbar-light border-bottom">
          <div className="container-fluid g-0 d-flex align-items-center">
            <NavLink className="navbar-brand" to="/">
              <h1 className="mb-2">
                <img src="img/Logo.png" alt="標題" className="img-title" />
              </h1>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <ul className="navbar-nav">
                <li className="nav-item me-8">
                  <NavLink className="nav-link h4 mb-0" aria-current="page" to="/">
                    Web Server
                  </NavLink>
                </li>
                <li className="nav-item me-8">
                  <NavLink className="nav-link h4 mb-0" to="/introduction">
                    Introduction
                  </NavLink>
                </li>
                <li className="nav-item me-8">
                  <NavLink className="nav-link h4 mb-0" to="/tutorial">
                    Tutorial
                  </NavLink>
                </li>
                <li className="nav-item me-8">
                  <NavLink className="nav-link h4 mb-0" to="/download">
                    Download
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="py-2 border-bottom d-flex align-items-center text-success fs-5">
          <i className="bi bi-house me-2"></i>
          <span>/</span>
          <span className="ms-2">{pageName}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
