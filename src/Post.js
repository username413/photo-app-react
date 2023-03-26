import React, { useState } from "react";
import AddComment from "./AddComment";
import BookmarkButton from "./BookmarkButton";
import LikeButton from "./LikeButton";
import { getHeaders } from "./utils";

export default function Post({ token, post }) {
    let commentToShow, viewAllComments;

    const [currLikeID, setCurrLikeID] = useState(post.current_user_like_id);
    const [currBookmarkID, setCurrBookmarkID] = useState(post.current_user_bookmark_id);
    const [likeCount, setLikeCount] = useState(post.likes.length);
    const [commentsCount, setCommentCount] = useState(post.comments.length);
    const [latestComment, setLatestComment] = useState(post.comments[post.comments.length - 1])

    async function requeryPost() {
        const res = await fetch("/api/posts/" + post.id, {
            headers: getHeaders(token)
        });
        const data = await res.json();
        setCurrLikeID(data.current_user_like_id);
        setCurrBookmarkID(data.current_user_bookmark_id);
        setLikeCount(data.likes.length);
        setCommentCount(data.comments.length);
        setLatestComment(data.comments[data.comments.length - 1]);
    }

    if (commentsCount > 1) {
        commentToShow = <div id="comments"> <strong>{latestComment.user.username}</strong> {latestComment.text} </div>;
        viewAllComments = <div> <button id="view-all-comments">View all {commentsCount} comments</button> </div>;
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
                <strong>{likeCount} likes</strong>
            </div>
            <div id="caption">
                <strong>{post.user.username}</strong> {post.caption}
            </div>
            {viewAllComments}
            {commentToShow}
            <div id="days-ago">
                {post.display_time}
            </div>
            <AddComment token={token} post={post} requeryPost={requeryPost} />
        </div>
    )
}