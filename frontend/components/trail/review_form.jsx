import React, { useState } from "react";
import { connect } from "react-redux";
import { createReview } from "../../actions/review_actions.js";

const ReviewForm = ({ trail, setShowModal, createReview, userId }) => { 
    
    const [rating, setRating] = useState(0);
    const [input, setInput] = useState("");

    const handleMouseEnter = e => {
        const stars = e.target.parentElement.children;
        for(let i = 0; i < stars.length; i++) {
            const img = stars[i];
            if(Number(img.id) <= Number(e.target.id)) {
                img.classList.add("active");
            } else {
                break;
            }
        }
    };

    const handleMouseLeave = e => {
        const stars = e.target.parentElement.children;
        for(let i = 0; i < stars.length; i++) {
            stars[i].classList.remove("active");
        }
    };
    
    const handleRating = e => {
        const id = Number(e.target.id);
        const stars = e.target.parentElement.children;
        if(id === rating) {
            setRating(0);
            for(let i = 0; i < stars.length; i++) {
                stars[i].classList.remove("selected");
            }
        } else {
            setRating(id);
            for(let i = 0; i < stars.length; i++) {
                const img = stars[i];
                img.classList.remove("selected");
                if(Number(img.id) <= id) {
                    img.classList.add("selected");
                }
            }
        }        
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        createReview({
            rating: rating, 
            text: input,
            userId: userId, 
            trailId: trail.id 
        });
        setShowModal(false);
    };
    
    return (
        <section id="review-form">
            <form onSubmit={handleSubmit}>
                <section>
                    <img onClick={() => setShowModal(false)} src="/trail_images/x_icon.png" alt="Close"/>
                    <h3>{trail.name}</h3>
                    <div>
                        {[1, 2, 3, 4, 5].map(num => 
                            <img 
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                onClick={handleRating} 
                                id={num} 
                                key={num}
                                src="/trail_images/star_filled.png" 
                                alt="star"
                            />
                        )}
                    </div>
                    <textarea 
                        onChange={e => setInput(e.target.value)}
                        placeholder="Share your thoughts about the trail so others know what to expect."
                    />
                </section>
                <section>
                    <div>
                        <button>Submit</button>
                    </div>
                </section>
            </form>
        </section>
    );
};

const mSTP = state => ({
    userId: state.session.id
});

const mDTP = dispatch => ({
    createReview: review => dispatch(createReview(review))
});

export default connect(mSTP, mDTP)(ReviewForm);