import React, { useState } from "react";

const ListCard = ({ list, setSelectedList }) => {
    return (
        <article onClick={() => setSelectedList(list)}>
            <img src={list.img_url ? list.img_url : "./list_images/alltrails_symbol.png"} alt="Photo for list"/>
            <div>
                <p>{list.name}</p>
            </div>
        </article>
    );
};

export default ListCard;
