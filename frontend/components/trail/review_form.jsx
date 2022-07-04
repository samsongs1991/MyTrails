import React, { useState } from "react";

const ReviewForm = ({ trail, setShowModal }) => { 
    
    const [rating, setRating] = useState(0);
    const [input, setInput] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        setShowModal(false);
    };
    
    return (
        <section id="review-form">
            <form onSubmit={handleSubmit}>
                <section>
                    <img onClick={() => setShowModal(false)} src="/trail_images/x_icon.png" alt="Close"/>
                    <h3>{trail.name}</h3>
                    <div>
                        <img id="1" src="/trail_images/star_filled.png" alt="star"/>
                        <img id="2" src="/trail_images/star_filled.png" alt="star"/>
                        <img id="3" src="/trail_images/star_filled.png" alt="star"/>
                        <img id="4" src="/trail_images/star_filled.png" alt="star"/>
                        <img id="5" src="/trail_images/star_filled.png" alt="star"/>
                    </div>
                    <textarea 
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

export default ReviewForm;