import React, { Component } from "react";

import { Link } from "react-router-dom";

class Logo extends Component {
    render() {
        const size = {
            height: this.props.size ? this.props.size : 100,
            width: this.props.size ? this.props.size :100,
        }
        return (
            <div className="logo-main">
                <Link to="/">
                    <img style={size} alt="Logo" src="./assets/images/ds_circle_logo.png" />
                </Link>
            </div>
        )
    }
}
export default Logo