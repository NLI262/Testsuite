import React, { Component } from "react";
import "./Footer.css"

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <a href="https://www.nineleaps.com/privacy-policy">
              <font style={{ color:"white"}} >Privacy Policy</font>
            </a>
            &nbsp;&nbsp;© 2019 Nineleaps
            </div>
        );
    }
}

export default Footer;