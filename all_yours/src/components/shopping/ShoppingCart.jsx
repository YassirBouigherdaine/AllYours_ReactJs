import React, { Component } from 'react';
import Product from './Product';
import Basket from './Basket';
import { FaCartPlus, FaClipboardList } from 'react-icons/fa';





class ShoppingCart extends Component {

    state = {
        products: [],
        displayBasket: false,
        prodNumbers: 0,
        loading: true,
    };



    render() {

        if (!this.state.displayBasket && !this.state.loading) return (
            <>

                <div className="container-fluid mb-5 mt-5">

                    <div className="row shadow-lg p-3 mb-5 bg-body rounded ms-3 me-3">

                        <span className="hand-icon " onClick={this.handelDiplayBasket}>
                            <span class="badge bg-warning text-dark float-end mb-5 border border-dark rounded-circle">{this.state.prodNumbers}</span>
                            <FaCartPlus className="text-success float-end fs-1 mt-2" />
                            
                        </span>

                        <h1 className="display-6 text-center mt-5 mb-5 ">Shopping Cart</h1>

                        {!this.state.displayBasket && this.state.products.map((prod) => {

                            return < Product

                                key={prod.id}
                                product={prod}
                                onIncrement={this.handelIncrmnt}
                                onDecrement={this.handelDecrmnt}
                                onDelete={this.handelDelete}
                                

                            ></Product>;

                        })}


                    </div>


                </div>
            </>
        );
        else if (this.state.displayBasket && !this.state.loading) return (
            <>

                <div className="container-fluid mb-5 mt-5">

                    <div className="row shadow-lg p-3 mb-5 bg-body rounded ms-3 me-3">

                        <span className="hand-icon ">
                            <FaClipboardList className="text-success float-end fs-2" onClick={this.handelDiplayBasket} />
                        </span>

                        {this.state.displayBasket && <Basket prods={this.state.products} />}

                    </div>
                </div>
            </>
        );

        if (this.state.loading) return (

            <div className="container-fluid mb-5 mt-5">

                <div className="row ">

                    <div className="text-center mt-5 mb-5 px-5 py-5">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>

                </div>

            </div>

            )

    }

    componentDidMount() {

        fetch('http://localhost:5000/products', { method: "Get" })
            .then((response) => response.json())
            .then(prods => {
                this.setState({ products: prods });

                this.setState({ loading: false });
            });
    }

    handelIncrmnt = (prod) => {

        let prods = [...this.state.products];
        let indx = prods.indexOf(prod);

        if (prods[indx].quantity < 10) {

            prods[indx].quantity++;
            this.setState({ products: prods })
            this.setState({ prodNumbers: this.state.prodNumbers + 1 })
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

    handelDecrmnt = (prod) => {

        let prods = [...this.state.products];
        let indx = prods.indexOf(prod);

        if (prods[indx].quantity > 0) {

            prods[indx].quantity--;
            this.setState({ products: prods })
            this.setState({ prodNumbers: this.state.prodNumbers - 1 })
        }
    };

    handelDiplayBasket = () => {
        this.setState({ displayBasket: !this.state.displayBasket })
    }

}

export default ShoppingCart;