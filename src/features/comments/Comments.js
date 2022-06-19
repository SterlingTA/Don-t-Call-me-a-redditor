import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadComments, selectComments, isLoadingComments, createVisibility, cVisible} from "./commentsSlice";
import CommentItem from "../../components/comment";



export default function Comments({ url, id }) {
    const dispatch = useDispatch();
    const comments = useSelector(selectComments);
    const isLoading = useSelector(isLoadingComments);
    const visible = useSelector(cVisible);


    useEffect(() =>{
        dispatch(createVisibility(id))
    }, [])

   useEffect(()=>{
        visible[id] && !comments[id] && dispatch(loadComments(url))
    }, [dispatch, id, visible[id],url])


    if (isLoading[id] && visible[id]) {
        return <div>getting comments</div>
    }

    if (visible[id] && comments[id]) {
        return (
            <div className="comments">
                {comments[id].map(comment => (
                    <CommentItem comment={comment.data} />
                ))}
            </div>
        )
    }
}