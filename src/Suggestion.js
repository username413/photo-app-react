import React from "react";

export default function Suggestion({ suggestion }) {
    return (
        <section id={"suggestion_" + suggestion.id} key={"suggestion_" + suggestion.id}>
            <img src={suggestion.following ? suggestion.following.image_url : suggestion.image_url} alt="suggested profile"></img>
            <div>
                <p className="username">
                    {suggestion.following ? suggestion.following.username : suggestion.username}
                </p>
                <p id="suggested-for-you">
                    suggested for you
                </p>
            </div>
            <button id={"button_" + suggestion.id}>
                {suggestion.following ? "unfollow" : "follow"}
            </button>
        </section>
    )
}