import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts, selectPosts, isLoadingPosts, selectUrl } from "./postsSlice";
import {setVisibilty } from "../comments/commentsSlice";
import PostItem from "../../components/post";


export default function Posts() {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const isLoading = useSelector(isLoadingPosts);
    const url = useSelector(selectUrl)


    useEffect(() => {
        dispatch(loadPosts(url));
    }, [dispatch,url]);

    const showComments = (id) => {
        dispatch(setVisibilty(id))
    }

    if (isLoading) {
        return <div>loading</div>
    }

    return (
        <section className="posts-container">
            {posts.data.children.map((post) => (
                <PostItem post={post.data} showComments={showComments} key={post.data.id} />
            ))}
        </section>

    )

}