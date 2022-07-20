import React, { useState } from "react";
import List from "./list.jsx";

const ListCard = ({ list }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <article>
            <img src={list.img_url ? list.img_url : "./list_images/alltrails_symbol.png"} alt="Photo for list"/>
            <div>
                <p>{list.name}</p>
            </div>
            {showModal ? <List list={list} setShowModal={setShowModal}/> : null}
        </article>
    );
};

export default ListCard;
