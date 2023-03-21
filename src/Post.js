import React from "react";
// import { getHeaders } from "./utils";

export default function Post({ token, post }) {
    // async function getPost() {
    //     const res = await fetch("api/posts/" + post.id, {
    //         headers: getHeaders(token)
    //     });
    //     const data = await res.json();

    // }
    // getPost();
    return (
        <div className="card">
            <div key={post.id}>{post.user.username}</div>
            <div>
                <img src={post.image_url} alt="post"></img>
            </div>
            <div>{post.caption}</div>
        </div>
    )
}