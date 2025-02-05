import { NavLink } from "react-router-dom"

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-white">
                    <div className="container-fluid g-0 d-flex align-items-center">
                      <NavLink className="navbar-brand" to='/'><h1 className="mb-2"><img src="img/Logo.png" alt="標題" className="img-title"/></h1></NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                            <ul className="navbar-nav">
                                <li className="nav-item me-8">
                                    <NavLink className="nav-link h4 mb-0" aria-current="page" to='/'>Web Server</NavLink>
                                </li>
                                <li className="nav-item me-8">
                                    <NavLink className="nav-link h4 mb-0" to='/introduction'>Introduction</NavLink>
                                </li>
                                <li className="nav-item me-8">
                                    <NavLink className="nav-link h4 mb-0" to='/tutorial'>Tutorial</NavLink>
                                </li>
                                <li className="nav-item me-8">
                                    <NavLink className="nav-link h4 mb-0" to='/download'>Download</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link h4 mb-0" to='/contact' >Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
            </nav>
        </>
    )
}

export default Header