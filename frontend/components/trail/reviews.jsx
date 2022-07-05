import React, { useState } from "react";
import { connect } from "react-redux";
import ReviewForm from "./review_form.jsx";

const Reviews = ({ signedIn, createReview, trail }) => {

    const [showModal, setShowModal] = useState(false);
    
    const handleNewReview = e => {
        if(signedIn) {
            setShowModal(true);
        } else {
            const msg = e.target.parentElement.children[1];
            msg.classList.add("flash");
            setTimeout(() => {
                msg.classList.remove("flash");
            }, 2000);
        }
    };
    
    return (
        <section id="reviews">
            <section>
                <h2>Reviews</h2>
            </section>
            <section>
                <article>
                    <div>
                        <div>
                            <img src="/trail_images/star_filled.png" alt="star icon"/>
                            <span>Avg Rating</span>
                        </div>
                        <p># Reviews</p>
                    </div>
                    <div>
                        <button onClick={handleNewReview}>Write review</button>
                        <p>Log in to write a review</p>
                    </div>
                </article>
                {/* List of all reviews */}
                {/* Iterate through reviews and
                render a review comp */}
            </section>
            {showModal ? <ReviewForm setShowModal={setShowModal} trail={trail}/> : null}
        </section>
    );
};

const mSTP = state => ({
    signedIn: Boolean(state.session.id)
});

export default connect(mSTP)(Reviews);