import React, { useState, useEffect } from 'react';
import Review from './Review';



const Reviews = () => {

    const [index, setIndex] = useState(1);
    const [people, setPeople] = useState([]);
    const [loading, setLoding] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/reviews', { method: "Get" })
            .then((response) => response.json())
            .then(revs => {

                setPeople(revs);
                setLoding(false);
            });
    }, [])

    const prevReview = () => {

        setIndex(index < 4 ? index + 1 : 1);
    }
    const nextReview = () => {

        setIndex(index > 1 ? index - 1 : 4);
    }

    if (!loading) return (
        <>

            <div className="container-fluid mb-5 mt-5">

                <div className="row  ms-1 me-1 ">

                    <div className="col-lg-12 shadow-lg   mb-5 bg-body rounded">

                        {people && people.map((person) => {

                            if (person.id === index) return < Review
                                key={person.id}

                                name={person.name}
                                image={person.image}
                                job={person.job}
                                text={person.text}
                                prevReview={prevReview}
                                nextReview={nextReview}

                            ></Review>;
                        })}

                    </div>
                </div>
            </div>
        </>
    )
    else {
        return (

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

};


export default Reviews;