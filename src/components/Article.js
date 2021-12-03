import React from "react";
import blogData from "../data/blog";

function Article(props){
    return (
        <article>
            <h3>{props.posts.title}</h3>
            {props.posts.date && props.posts.length > 1 ? <small>{props.posts.date}</small> : <small>January 1, 1970</small>}
            <p>{props.posts.preview}</p>
        </article>
    )
}

export default Article