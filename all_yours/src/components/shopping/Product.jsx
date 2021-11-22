import React, { Component } from 'react';
import { FaTimesCircle } from 'react-icons/fa';


class Product extends Component {

	state = {
		product: this.props.product,
	};

	render() {

		return (
            <div className="col-lg-4 ">
				<div className="card m-2 shadow p-3 mb-5 bg-body rounded w-75 ms-5">
					<span className="hand-icon " onClick={() => { this.props.onDelete(this.state.product) }}>
						<FaTimesCircle className="text-secondary float-end"/>
					</span>

					<img src={this.state.product.image} alt="product" className='card-img-top shadow-sm  mt-2' />
					<div className="card-body mt-1">

						<div className="border-bottom mb-3">
							<h5 className="lead mt-1 float-end">${this.state.product.price}</h5>
							<h4 className=" mt-1 fs-5">{this.state.product.name}</h4>
						</div>

						<span className="badge text-dark float-end fs-5">{this.state.product.quantity}</span>
						<div className="btn-group">
							<h5 className="btn btn-outline-success" onClick={() => { this.props.onIncrement(this.state.product); }}>+</h5>
							<h5 className="btn btn-outline-success" onClick={() => { this.props.onDecrement(this.state.product); }}>-</h5>
						</div>
						
						<p class="card-text">{this.state.product.description}</p>

					</div>
					<div className="card-footer">
						<div className="d-grid gap-2">
							<button className="btn btn-warning shadow-sm" onClick={() => { this.props.onIncrement(this.state.product); }}>Add to Basket</button>
						</div>
					</div>
					
				</div>
            </div>
				
        );

	}


}

export default Product;