import { Routes, Route } from 'react-router-dom';
import React, { Component } from 'react';
import NavBar from './NavBar';
import MyShow from './MyShow';
import Footer from './Footer';
import ShoppingCart from '../shopping/ShoppingCart';
import Review from '../reviews/Review';
import Contact from '../contact/Contact';
import Login from '../login/Login';
import NoMatchPage from './NoMatchPage';



class Home extends Component {

    render() {

        return (
            <>
                <div>
                    <NavBar />
                </div>
               
                <div>
                    <Routes  >

                        <Route exact path='/Home' element={<MyShow />}></Route>

                        <Route exact path='/ShoppingCart' element={<ShoppingCart />}></Route>

                        <Route exact path='/Review' element={<Review />}></Route>

                        <Route exact path='/Contact' element={<Contact />}></Route>

                        <Route exact path='/Login' element={<Login />}></Route>

                        <Route exact path='*' element={<NoMatchPage />}></Route>

                    </Routes  >
                </div>


                <Footer />

            </>
        );

    }

}

export default Home;