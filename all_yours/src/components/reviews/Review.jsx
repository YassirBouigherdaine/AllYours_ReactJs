import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';



const Review = (props) => {

    return (

        <article className="col-lg-4 container-fluid ">

            <h1 className="display-6 text-center ms-5 mt-5 mb-5 underline">Reviews</h1>
            <div className="myReviewCard shadow-lg mb-5 bg-body rounded ">
                <img src={props.image} className=" myReviewImg me-5 shadow p-3 mt-5 mb-3 bg-body " alt={props.name} />
                <div className="card-body ms-4">
                    <h4 className="card-title">{props.name}</h4>
                    <p className="card-title">{props.job}</p>
                    <p className="card-text">{props.text}</p>
                </div>
                <div class="btn-group ms-4 m-2 mb-5">
                    <button class="btn btn-outline-primary" onClick={() => {props.prevReview(props) }}><FaChevronLeft /></button>
                    <button class="btn btn-outline-primary" onClick={() => { props.nextReview(props) }}><FaChevronRight /></button>
                </div>

            </div>

        </article>

    );

}


export default Review;