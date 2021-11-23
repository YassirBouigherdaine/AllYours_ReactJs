import React, { Component } from 'react';


class Login extends Component {

    state = {
        email: "",
        password:"",
        message: "",
    };

    render() {

        return (
            <div className="col py-1 ">
                

                <form className="container-fluid w-75 py-5 px-5 shadow-lg p-3 mb-5 mt-5 bg-body rounded">
                    <h1 className="display-6 text-center mb-5 ">Login</h1>
                    <div className="mb-4 mt-5">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                        <div  className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-4">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                        
                    </div>

                    <button type="submit" className="btn btn-success mt-2 mb-4" onClick={this.onLogin}>Login</button>
                </form>

                <div className="ms-5">
                    {this.state.message}
                </div>

            </div>
           
        );

    }

    onLogin = async () => {

        var response = await fetch(
            `http://localhost:5000/users? email=${this.state.email}&password=${this.state.password}`,
            { method: "GET" }
        );

        let body = await response.json();

        if (body.length <= 0) {
            this.setState(
                { message: <div className="alert text-danger" role="alert" >Invalid login</div> }
            )
        }

    }
}

export default Login;