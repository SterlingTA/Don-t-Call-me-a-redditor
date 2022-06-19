import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadSubreddits, selectSubs, isLoadingSubs} from './subredditSlice'
import './Subreddit.css'
import { changeUrl } from '../posts/postsSlice';


export default function Subreddit(){
    const dispatch = useDispatch();
    const subs = useSelector(selectSubs);
    const isLoading = useSelector(isLoadingSubs);
    

    useEffect(()=>{
        dispatch(loadSubreddits());
    }, [dispatch]);

    

    if(isLoading){
        return <div>loading</div>
    }


    return(
        <ul className='sub-container'>
            {subs.data.children.map(subreddit => (
                <button key={subreddit.data.id} onClick={() => dispatch(changeUrl(`${subreddit.data.url}.json`))} >
                    <li  className='subName'> 
                    <img className='subIcon' style={{borderColor: subreddit.data.primary_color}} src={subreddit.data.icon_img}/>
                     {subreddit.data.display_name}</li>
                     </button>
            ))}
        </ul>
    )
}