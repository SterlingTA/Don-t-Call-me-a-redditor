import React from "react";
import Comments from "../features/comments/Comments";
import './postsStyle.css'
import  comment from './resources/comment.png'




export default function PostItem({ post, showComments }) {
    return (
        <article className="post" key={post.id}>
            <div className="sub"><p>r/{post.subreddit}</p></div>
            <div className="title"><h2>{post.title}</h2></div>
            <div className="preview">
                <p className="score">{post.score}</p>
                {post.post_hint === 'image' && <img className="previewImage" alt="" src={post.url} />}
                {post.is_video === true && <video width='40%' height='30%' controls>
                    <source src={post.media.reddit_video.fallback_url} />
                    </video>} 
                    {!post.post_hint && <p>{post.selftext}</p>}
            </div>
            <hr />
            <div className="uploader">
                <p>Posted by: {post.author}</p>
                <button onClick={() =>showComments(post.id)}><img className="commentButton" src={comment} alt ='show comments'/></button>
            </div>
            <div className="showComments">
                <Comments url ={post.permalink}  id = {post.id}/>
            </div>
        </article>
    )
}