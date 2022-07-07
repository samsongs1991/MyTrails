import React from "react";

const FilterRating = ({ options, setOptions }) => {

    const modal = () => {
        const handleCheck = e => {
            let newRating;
            switch(e.target.value) {
                case "1":
                    const one = options.rating[1];
                    newRating = Object.assign({}, options.rating, { 1: !one });
                    break;
                case "2":
                    const two = options.rating[2];
                    newRating = Object.assign({}, options.rating, { 2: !two });
                    break;
                case "3":
                    const three = options.rating[3];
                    newRating = Object.assign({}, options.rating, { 3: !three });
                    break;
                case "4":
                    const four = options.rating[4];
                    newRating = Object.assign({}, options.rating, { 4: !four });
                    break;
                case "5":
                    const five = options.rating[5];
                    newRating = Object.assign({}, options.rating, { 5: !five });
                    break;
            }
            setOptions(Object.assign({}, options, { rating: newRating }));
        };
        
        return (
            <form id="rating-form" className="form-modal" onClick={e => e.stopPropagation()}>
                <label>
                    <input
                        value="1"
                        type="checkbox"
                        onChange={handleCheck}
                        checked={options.rating[1]}
                    />
                    <span>1</span>
                    <img src="/trail_images/star_filled.png" alt="star"/>
                </label>
                <label>
                    <input
                        value="2"
                        type="checkbox"
                        onChange={handleCheck}
                        checked={options.rating[2]}
                    />
                    <span>2</span>
                    <img src="/trail_images/star_filled.png" alt="star"/>
                    <img src="/trail_images/star_filled.png" alt="star"/>
                </label>
                <label>
                    <input
                        value="3"
                        type="checkbox"
                        onChange={handleCheck}
                        checked={options.rating[3]}
                    />
                    <span>3</span>
                    <img src="/trail_images/star_filled.png" alt="star"/>
                    <img src="/trail_images/star_filled.png" alt="star"/>
                    <img src="/trail_images/star_filled.png" alt="star"/>
                </label>
                <label>
                    <input
                        value="4"
                        type="checkbox"
                        onChange={handleCheck}
                        checked={options.rating[4]}
                    />
                    <span>4</span>
                    <img src="/trail_images/star_filled.png" alt="star"/>
                    <img src="/trail_images/star_filled.png" alt="star"/>
                    <img src="/trail_images/star_filled.png" alt="star"/>
                    <img src="/trail_images/star_filled.png" alt="star"/>
                </label>
                <label>
                    <input
                        value="5"
                        type="checkbox"
                        onChange={handleCheck}
                        checked={options.rating[5]}
                    />
                    <span>5</span>
                    <img src="/trail_images/star_filled.png" alt="star"/>
                    <img src="/trail_images/star_filled.png" alt="star"/>
                    <img src="/trail_images/star_filled.png" alt="star"/>
                    <img src="/trail_images/star_filled.png" alt="star"/>
                    <img src="/trail_images/star_filled.png" alt="star"/>
                </label>
            </form>
        );
    };

    const handleModal = e => {
        e.stopPropagation();
        const form = document.getElementById("rating-form");
        const arrow = document.getElementById("rating-arrow");
        if(form.classList.contains("show")) {
            form.classList.remove("show");
            arrow.classList.remove("active");
        } else {
            form.classList.add("show");
            arrow.classList.add("active");
        }
        const formModals = document.getElementsByClassName("form-modal");
        const filterArrows = document.getElementsByClassName("filter-arrow");
        for(let i = 0; i < formModals.length; i++) {
            if(formModals[i].id !== "rating-form") {
                formModals[i].classList.remove("show");
                filterArrows[i].classList.remove("active");
            }
        }
    };
    
    return (
        <div>
            <button id="rating-btn" onClick={handleModal}>
                Rating
                <img id="rating-arrow" className="filter-arrow" src="/explore_images/menu-arrow.png" alt="menu arrow"/>
            </button>
            {modal()}
        </div>
    );
};

export default FilterRating;