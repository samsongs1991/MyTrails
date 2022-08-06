import React from "react";

const FilterCategory = ({ options, setOptions }) => {

    const modal = () => {
        const handleCheck = e => {
            let newCategory;
            switch(e.target.value) {
                case "Loop":
                    const loop = options.category["Loop"];
                    newCategory = Object.assign({}, options.category, { "Loop": !loop });
                    break;
                case "Out & Back":
                    const outAndBack = options.category["Out & Back"];
                    newCategory = Object.assign({}, options.category, { "Out & Back": !outAndBack });
                    break;
                case "Point to Point":
                    const pointToPoint = options.category["Point to Point"];
                    newCategory = Object.assign({}, options.category, { "Point to Point": !pointToPoint });
                    break;
            }
            setOptions(Object.assign({}, options, { category: newCategory }));
        };

        return (
            <form id="category-form" className="form-modal" onClick={e => e.stopPropagation()}>
                <label><input
                    value="Loop"
                    type="checkbox"
                    onClick={handleCheck}
                />Loop</label>
                <label><input
                    value={"Out & Back"}
                    type="checkbox"
                    onClick={handleCheck}
                />{"Out & Back"}</label>
                <label><input
                    value="Point to Point"
                    type="checkbox"
                    onClick={handleCheck}
                />Point to Point</label>
            </form>
        );
    };

    const handleModal = e => {
        e.stopPropagation();
        const form = document.getElementById("category-form");
        const arrow = document.getElementById("category-arrow");
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
            if(formModals[i].id !== "category-form") {
                formModals[i].classList.remove("show");
                filterArrows[i].classList.remove("active");
            }
        }
    };

    return (
        <div>
            <button id="category-btn" onClick={handleModal}>
                Category
                <img id="category-arrow" className="filter-arrow" src={images.menu_arrow} alt="menu arrow"/>
            </button>
            {modal()}
        </div>
    );
};

export default FilterCategory;
