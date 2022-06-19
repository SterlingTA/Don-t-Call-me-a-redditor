import React from "react";
import moment from "moment";
import './comment.css'

export default function CommentItem({ comment }) {
    return (
        <article id="comment" key={comment.id}>
            <div className="toprow">
                <p className="author">{comment.author}</p>
                <p className="comment-created-time">
                    {moment.unix(comment.created_utc).fromNow()}
                </p>
                </div>
            <p className="body">{comment.body}</p>
            <p className="updoots">{comment.score}</p>
        </article>
    )
}