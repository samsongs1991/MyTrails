import React from "react";

const ListCard = ({ list }) => {
    return (
        <article id="list-card">
            <img src={list.img_url} alt="Photo for list"/>
            <div>{list.name}</div>
        </article>
    );
};

export default ListCard;
