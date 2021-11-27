import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NoMatchPage extends Component {

    render() {

        return (
            <div className="container-fluid mb-5 mt-5">

                <div className="row ">
            <div className="text-center mb-5 mt-5">
                <h1 className="display-6 text-center mt-5 mb-5 ">Page not found !</h1>

                <Link to="/" className="btn btn-success ">
                    Back Home
                </Link>

                    </div>
                </div>
            </div>
        );

    }

}

export default NoMatchPage;