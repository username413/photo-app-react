import React from "react";

export default function BookmarkButton({ currBookmarkID }) {
    return (
        currBookmarkID != null
            ? <button type="button" title="Unbookmark this post."> <i aria-label="Post is bookmarked." aria-checked="true" class="fa-solid fa-bookmark"></i> </button>
            : <button type="button" title="Bookmark this post."> <i aria-label="Post is not bookmarked." aria-checked="false" class="fa-regular fa-bookmark"></i> </button>

    );
}