function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-white">
                    <div className="container-fluid ">
                      <a className="navbar-brand" href="#"><h1 className="mb-0"><img src="img/e3dd88d8bc9492f1f0a1ee5a4d76bbc9.png" alt="標題" className="img-title"/></h1></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link h4 mb-0 active" aria-current="page" href="#">Web Server</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link h4 mb-0 " href="#">Introduction</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link h4 mb-0 " href="#">Tutorial</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link h4 mb-0 " href="#">Download</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link h4 mb-0 " href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
            </nav>
        </>
    )
}

export default Header