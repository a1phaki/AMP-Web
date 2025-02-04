import { Link } from "react-router-dom"

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-white">
                    <div className="container-fluid ">
                      <Link className="navbar-brand" to='/'><h1 className="mb-0"><img src="img/Logo.png" alt="標題" className="img-title"/></h1></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link h4 mb-0 active" aria-current="page" to='/'>Web Server</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link h4 mb-0" to='/introduction'>Introduction</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link h4 mb-0 " to='/tutorial'>Tutorial</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link h4 mb-0 " to='/download'>Download</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link h4 mb-0 " >Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
            </nav>
        </>
    )
}

export default Header