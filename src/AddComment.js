import React from "react";

export default function AddComment() {
    return (
        <div id="add-comment">
            <div id="comment-input">
                <form action="emote"><i className="fa-regular fa-face-smile"></i></form>
                <input type="text" placeholder="Add a comment.." />
            </div>
            <div>
                <button id="post-comment-button">Post</button>
            </div>
        </div>
    );
}