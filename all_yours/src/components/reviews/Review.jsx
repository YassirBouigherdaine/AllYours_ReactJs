import React, { useState } from 'react';
import people from '../reviews/Reviews';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const Review = () => {

    const [index, setIndex] = useState(1);
    const { name, image, job, text } = people[index];

    const prevReview = () => {

        setIndex((index) => {

            let newIndx = index - 1;

            if (newIndx < 0) {
                newIndx = people.length - 1;
            }
            return newIndx;
        })
    }
    const nextReview = () => {

        setIndex((index) => {

            let newIndx = index + 1;

            if (newIndx > people.length - 1) {
                newIndx = 0;
            }
            return newIndx;
        })
    }


    return (
        <article className="col-lg-4 container-fluid ">
            <h1 className="display-6 text-center ms-5 mt-5 mb-5">Reviews</h1>
            <div className="myReviewCard shadow-lg   mb-5 bg-body rounded ">
                <img src={image} className=" myReviewImg me-5 shadow p-3 mt-5 mb-3 bg-body " alt={name} />
                <div className="card-body ms-4">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-title">{job}</p>
                    <p className="card-text">{text}</p>
                </div>
                <div class="btn-group ms-4 m-2 mb-5">
                    <button class="btn btn-outline-primary" onClick={prevReview}><FaChevronLeft /></button>
                    <button class="btn btn-outline-primary" onClick={nextReview}><FaChevronRight /></button>
                </div>
               
            </div>

        </article>


    )
};


export default Review;