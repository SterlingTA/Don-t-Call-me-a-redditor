import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSearchTerm, selectSearchTerm, setSearchTerm } from "./searchSlice";
import { changeUrl} from "../posts/postsSlice";
import './Search.css'
import glass from './resources/magnifying-glass-g3aac060be_640.png'



export default function Search() {

    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchTerm)


    const onSearchChangeHandler = e => {
        dispatch(setSearchTerm(e.target.value));
    }

    const onSearchTermConfirmHandler = (e) => {
        e.preventDefault();
        dispatch(changeUrl(`search.json?q=$${searchTerm}`))
        dispatch(clearSearchTerm())
    }


    return (
        <header className="banner">
            <div className="bannerElements">
                <div className="logo">
                    <h3>RedditMinimal</h3>
                </div>
                <form className="searchBar">
                    <input type='text' placeholder="Search" value={searchTerm} onChange={onSearchChangeHandler} />
                    <button onClick={onSearchTermConfirmHandler}><img className="searchlogo" src={glass} alt="Search" /></button>
                </form>
            </div>
        </header>
    )
}