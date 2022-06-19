#RedditMinimal

##What is it?
This app is a personal project for practicing react/redux.

##What is it made of?
*react/redux
*moment library

##What does it do?
This is a simple Reddit crawler app using the Reddit json api for data. The app starts up by loading the R/popular subreddit, presenting a searchbar to use the Reddit search to pull posts from any SFW subreddit, while a subreddit sidebar exists to go to the current top 20 active subreddits.
Information is pulled from the current subreddit or search term and the first page of results is display showing a post's title, content if available, score, uploader and finally a selection of comments.
Each comments has an uploader, time since comment, comment body, and score.

##What is its future?
In its current state, I've satisfied my personal goals of simply creating a react/redux app from scratch that's functional. For what it is, I rather not sink a large amount of time for what's simply practice.

If I were to return I would probably overhaul the UI, fix the subreddit sidebar so it doesn't move when new posts are loading in. Keep better track of loading state of comments. Add some aesthetic changes such as adding animations when loading posts or comments. Possibly add a means to add subreddits to the sidebar. Any further Reddit interactions would require switching apis which I would rather avoid this project.
