import React, { useState } from "react";

const ReviewForm = ({ trail, setShowModal }) => { 
    
    const [rating, setRating] = useState(0);
    const [input, setInput] = useState("");

    const handleRating = e => {
        const id = Number(e.target.id);
        id === rating ? setRating(0) : setRating(id);
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        setShowModal(false);
    };
    
    return (
        <section id="review-form">
            {console.log("rating", rating)}
            {console.log("input", input)}
            <form onSubmit={handleSubmit}>
                <section>
                    <img onClick={() => setShowModal(false)} src="/trail_images/x_icon.png" alt="Close"/>
                    <h3>{trail.name}</h3>
                    <div>
                        {[1, 2, 3, 4, 5].map(num => <img onClick={handleRating} id={num} src="/trail_images/star_filled.png" alt="star"/>)}
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

export default ReviewForm;