import React, { useState } from "react";
import AddComment from "./AddComment";
import BookmarkButton from "./BookmarkButton";
import LikeButton from "./LikeButton";
import { getHeaders } from "./utils";

export default function Post({ token, post }) {
    const noOfComments = post.comments.length;
    let commentToShow, viewAllComments;
    if (noOfComments > 1) {
        const latestComment = post.comments[noOfComments - 1];
        commentToShow = <div id="comments"> <strong>{latestComment.user.username}</strong> {latestComment.text} </div>;
        viewAllComments = <div> <button id="view-all-comments">View all {noOfComments} comments</button> </div>;
    }

    const [currLikeID, setCurrLikeID] = useState(post.current_user_like_id);
    const [currBookmarkID, setCurrBookmarkID] = useState(post.current_user_bookmark_id);

    async function requeryPost() {
        const res = await fetch("/api/posts/" + post.id, {
            headers: getHeaders(token)
        });
        const data = await res.json();
        setCurrLikeID(data.current_user_like_id);
        setCurrBookmarkID(data.current_user_bookmark_id);
    }

    return (
        <div className="card" key={post.id}>
            <div id="un-three-dots">
                {post.user.username}
                <i className="fa-solid fa-ellipsis"></i>
            </div>
            <div>
                <img src={post.image_url} alt="post"></img>
            </div>
            <div className="post-icons">
                <span id="left-post-icons">
                    <LikeButton currLikeID={currLikeID} token={token} post={post} requeryPost={requeryPost} />
                    <button type="button" title="Comment on this post.">
                        <i className="fa-regular fa-comment"></i>
                    </button>
                    <button type="button" title="Share this post.">
                        <i className="fa-regular fa-paper-plane"></i>
                    </button>
                </span>
                <span id="right-post-icons">
                    <BookmarkButton currBookmarkID={currBookmarkID} token={token} post={post} requeryPost={requeryPost} />
                </span>
            </div>
            <div id="like-counter">
                <strong>{post.likes.length} likes</strong>
            </div>
            <div id="caption">
                <strong>{post.user.username}</strong> {post.caption}
            </div>
            {viewAllComments}
            {commentToShow}
            <div id="days-ago">
                {post.display_time}
            </div>
            <AddComment />
        </div>
    )
}