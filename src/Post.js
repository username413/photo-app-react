import React from "react";

export default function Post({ post }) {
    return (
        <div className="card" key={post.id}>
            <div>
                {post.user.username}
                <i class="fa-solid fa-ellipsis"></i>
            </div>
            <div>
                <img src={post.image_url} alt="post"></img>
            </div>
            <div>{post.caption}</div>
        </div>
    )
}