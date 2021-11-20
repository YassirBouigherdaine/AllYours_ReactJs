import React from 'react';



const Basket = ({ prods }) => {

	return (
		<>

			<div className="container-fluid mb-5 mt-5">

				<div className="row  ms-1 me-1 ">

					<h1 className="display-6 text-center mt-2 mb-5 ">My Basket</h1>
					<div className="col-lg-12 ">
						<div className=" shadow p-3 mb-5 bg-body rounded w-100 ms-1">

							<table className="table">
								<thead className="table-dark">
									<tr>
										<th scope="col">Items</th>
										<th scope="col" >Price</th>
										<th scope="col">Quantity</th>
									</tr>
								</thead>
								<tbody>

									{prods && prods.map((prod) => {

										if (prod.quantity) return < Prod
											key={prod.id}
											
											name={prod.name}
											price={prod.price}
											quantity={prod.quantity}


										></Prod>;
									})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
  
};




const Prod = (props) => {

	return (
		<>
			<tr>
				<th scope="row">{props.name}</th>
				<td className="lead mt-1">${props.price}</td>
				<td>{props.quantity}</td>
				
			</tr>			
		
		</>
	);
};


export default Basket;