import React, { Component } from  "react";

import { connect } from "react-redux";

class ResultsPosts extends Component {
    render() {
        return (
            <div className="results-posts">
                <div className="results-posts-wrapper">
                    <ul className="result-posts-posts">
                        results go here 
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {state }
}

export default connect(mapStateToProps)(ResultsPosts);