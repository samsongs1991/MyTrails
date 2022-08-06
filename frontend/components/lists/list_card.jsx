import React, { useState } from "react";

const ListCard = ({ list, setSelectedList }) => {
    return (
        <article onClick={() => setSelectedList(list)}>
            <img src={list.list_img ? list.list_img : images.alltrails_symbol} alt="Photo for list"/>
            <div>
                <p>{list.name}</p>
            </div>
        </article>
    );
};

export default ListCard;
