import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class MyShow extends Component {

   
    render() {

        return (
            <>
                <div className=" px-5 py-4  figure" style={{
                    backgroundImage: `url("pics/pic1.jpg")`, backgroundSize: 'cover', width: '100%', height: '100%',
            }}>
                <div className="mt-5 pt-5 text-dark myText">
                    <h1 className="mt-5 mb-5 ">New Fashion</h1>
                    <p className="mt-4 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing</p>

                    <p className="mt-4 mb-2">Lorem ipsum dolor sit amet consectetur optio</p>

                    <Link className="btn btn-warning btn-lg mt-5 mb-5" to="/ShoppingCart">SHOP NOW</Link>
                   
                </div>
                
                </div>

                <div className="card text-center m-5 m-5">
                    
                    <div className="card-body">
                        <h5 className="card-title mb-4 mt-4">AllYours</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing amet consectetur adipisicing.</p>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing amet consectetur.</p>
                       
                        
                        <Link className="btn btn-warning m-3" to="/Reviews">View Reviews</Link>
                    </div>
                   
                </div>
                </>
        );

    }

}

export default MyShow;