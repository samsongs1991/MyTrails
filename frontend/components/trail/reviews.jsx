import React, { useState } from "react";
import { connect } from "react-redux";
import ReviewForm from "./review_form.jsx";

const Reviews = ({ trail }) => {

    const [showModal, setShowModal] = useState(false);
    
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
                        <button onClick={() => setShowModal(true)}>Write review</button>
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