import React, { Component } from 'react';
import Product from './Product';
import Basket from './Basket';
import { FaCartPlus } from 'react-icons/fa';





class ShoppingCart extends Component {

    state = {
        products: [],
        displayBasket: false,
    };



    render() {

        if (!this.state.displayBasket) return (
            <>

                <div className="container-fluid mb-5 mt-5">

                    <div className="row shadow-lg p-3 mb-5 bg-body rounded ms-3 me-3">

                        <span className="hand-icon ">
                            <FaCartPlus className="text-success float-end fs-2" onClick={this.handelDiplayBasket} />
                        </span>

                        <h1 className="display-6 text-center mt-5 mb-5 ">Shopping Cart</h1>

                        {!this.state.displayBasket && this.state.products.map((prod) => {

                            return < Product

                                key={prod.id}
                                product={prod}
                                onIncrement={this.handelIncrmnt}
                              
                                onDelete={this.handelDelete}

                            ></Product>;

                        })}


                    </div>


                </div>


            </>
        );
        else return (
            <>
                

                <div className="container-fluid mb-5 mt-5">

                    <div className="row shadow-lg p-3 mb-5 bg-body rounded ms-3 me-3">

                        <span className="hand-icon ">
                            <FaCartPlus className="text-success float-end fs-2" onClick={this.handelDiplayBasket} />
                        </span>

                        {this.state.displayBasket && <Basket prods={this.state.products} />}

                    </div>
                </div>
            </>
           

            );

    }

    componentDidMount() {

        fetch('http://localhost:5000/products', { method:"Get" })
            .then((response) => response.json())
            .then(prods => {
                this.setState({ products: prods });
            });

       
    }

    handelIncrmnt = (prod) => {

        let prods = [...this.state.products];
        let indx = prods.indexOf(prod);

        if (prods[indx].quantity <10) {
            prods[indx].quantity++;
            this.setState({ products: prods })
        }
        

        
    };

    handelDelete = (prod) => {
        let prods = [...this.state.products];
        let indx = prods.indexOf(prod);

        if (window.confirm("Are you sure to delete ?")) {
            prods.splice(indx, 1);
            this.setState({ products: prods })
        }

    }

    /*
       handelDecrmnt = (prod) => {
        let prods = [...this.state.products];
        let indx = prods.indexOf(prod);

        if (prods[indx].quantity > 0) {
            prods[indx].quantity--;
            this.setState({ products: prods })
        }

    };

   
     */

    handelDiplayBasket = () => {
        this.setState({ displayBasket: !this.state.displayBasket })
    }
  
}

export default ShoppingCart;