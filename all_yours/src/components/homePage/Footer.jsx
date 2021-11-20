import React, { Component } from 'react';
import { FaArrowAltCircleUp } from "react-icons/fa";


class Footer extends Component {

    render() {

        return (
            <div>
                <div className=" text-center pt-5 w-100 FooterBg text-white mt-1">
                    <div className="row mt-4">
                        <div className="col-4 ">
                            <h5 className="fs-5">Our Location</h5>
                            <br />
                            <ul className="myList">
                                <li>x.y.z.. street, ......</li>
                                <br />
                                <li>Marrakesh,........</li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <h5 className="fs-5">Opening Hours</h5>
                            <br />
                            <ul className="myList">
                                <li>Monday-Saturday</li>
                                <br />
                                <li>8:00 AM - 6:00 PM</li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <h5 className="fs-5">Contact us</h5>
                            <br />
                            <br />
                            <ul className="myList">
                                <li>95 (61) 346613895</li>
                                <br />
                                <li> holiday@gmail.com</li>
                                <br />
                                <li><i className="bi bi-facebook px-2"></i><i className="bi bi-instagram px-2"></i> <i className="bi bi-twitter"></i></li>

                            </ul>
                        </div>
                    </div>
                </div>

                <footer className="FooterBg text-white text-center position-relative border-top py-3">
                    <div className="container-fluid">
                        <p>Copyrigth &copy; 2021 Yassir Boui</p>
                        <a href="#" className="position-absolute bottom-0 end-0 p-3">
                            <i className="text-warning h2"><FaArrowAltCircleUp /></i>

                        </a>

                        
                    </div>
                   
                </footer>
            </div>
        );

    }

}

export default Footer;