import React from "react";

const ListCard = ({ list }) => {

    // add ability to click button "edit list"
    // will render an edit list card comp

    return (
        <article>
            <img src={list.img_url ? list.img_url : "./list_images/alltrails_symbol.png"} alt="Photo for list"/>
            <div>
                <p>{list.name}</p>
            </div>
        </article>
    );
};

export default ListCard;
