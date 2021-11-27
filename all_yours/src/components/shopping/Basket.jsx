import React from 'react';



const Basket = ({ prods }) => {

	let sum = 0;

	prods.map((prod) => {

		sum += prod.quantity * prod.price;

	})

	if (sum) return (
		<>

			<div className="container-fluid mb-5 mt-5">

				<div className="row ms-1  ">

					<h1 className="display-6 text-center mt-2 mb-5 ">Your Bag</h1>
					<div className="col-lg-12 ">
						<div className=" shadow p-3 mb-5 bg-body rounded w-100 ms-1">

							<table className="table">
								<thead className="table-dark">
									<tr>
										<th scope="col">Items</th>
										<th scope="col" >Price</th>
										<th scope="col">Quantity</th>
										<th scope="col">Total</th>
									</tr>
								</thead>
								<tbody>

									{prods && prods.map((prod) => {


										if (prod.quantity) return < Prod

											key={prod.id}
											name={prod.name}
											price={prod.price}
											quantity={prod.quantity}

										></Prod>
									})}


								</tbody>

							</table>

							<div className="row bg-dark m-1">
								<div className="col-12 px-5 py-2">
									
									<span className="float-end text-white fs-6 me-5 pe-5">Sum: ${sum}</span>
								</div>
							</div>


						</div>
					</div>
				</div>
			</div>
		</>
	);
	else {
		return (
			<h1 className="display-6 text-center mt-2 mb-5 ">Your Bag is Empty</h1>
			)
    }
  
};



const Prod = (props) => {

	return (
		<>
			<tr>
				<th scope="row">{props.name}</th>
				<td className="lead mt-1">${props.price}</td>
				<td>{props.quantity}</td>
				<td>${props.quantity * props.price}</td>
			</tr>			
		
		</>
	);
};


export default Basket;