import React from "react"
import './footer.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div className="footer-dark">
            <footer>
                    <div className="row">
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                <li><Link to={"/"}><a>Accueil</a></Link></li>
                                <li><Link to={"/about"}><a>A Propos</a></Link></li>
                                <li><Link to={"/contact"}><a>Contact</a></Link></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                <li><a href="/#">Company</a></li>
                                <li><a href="/#">Team</a></li>
                                <li><a href="/#">Careers</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 item text">
                            <h3>Company Name</h3>
                            <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut
                                vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit
                                pulvinar dictum vel in justo.</p>
                        </div>
                        <div className="col item social">
                            <FontAwesomeIcon className={"icon"} icon={["fab", "facebook-f"]} size={"2x"}
                                             color={"#FFF"}/>
                            <FontAwesomeIcon className={"icon"} icon={["fab", "twitter"]} size={"2x"} color={"#FFF"}/>
                            <FontAwesomeIcon className={"icon"} icon={["fab", "instagram"]} size={"2x"} color={"#FFF"}/>
                            <FontAwesomeIcon className={"icon"} icon={["fab", "snapchat-ghost"]} size={"2x"}
                                             color={"#FFF"}/>
                        </div>
                    </div>
                    <p className="copyright">Company Name ?? 2018</p>
            </footer>
        </div>

    );
}

export default Footer;