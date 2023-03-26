import React from "react";

export default function Post({ post }) {
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