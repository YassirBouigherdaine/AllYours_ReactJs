import React, { Component } from 'react';


class Contact extends Component {

    render() {

        return (
            <>
               
                <div className="col py-1 ">

                    <form className="container-fluid w-75 py-5 px-5 shadow-lg p-3 mb-5 mt-5 bg-body rounded">

                        <h1 className="display-6 text-center  mb-5 ">Contact us</h1>

                        <div className="mb-4 mt-5">
                            <label for="exampleInputEmail1" className="form-label">Name</label>
                            <input type="name" className="form-control" id="name" />

                        </div>

                        <div className="mb-4">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control"/>
                            <div className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                       
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <button type="submit" className="btn btn-success mt-2 mb-4" onClick={this.onSubmit}>Submit</button>
                    </form>
               
                </div>
            </>
        );

    }

    onSubmit = () => {
        alert("Submited!");
    }

}

export default Contact;