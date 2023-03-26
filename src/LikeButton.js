import React from "react";

export default function LikeButton({ currLikeID }) {
    return (
        currLikeID != null
            ? <button type="button" title="Unlike this post."> <i aria-label="Post is liked." aria-checked="true" className="fa-solid fa-heart" style={{ color: "red" }}></i> </button>
            : <button type="button" title="Like this post."> <i aria-label="Post is not liked." aria-checked="false" className="fa-regular fa-heart"></i> </button>
    );
}