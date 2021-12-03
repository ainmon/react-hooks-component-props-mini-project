import React from "react";
import Article from "./Article"
import blogData from "../data/blog";

function ArticleList({items}){
    const articles = items.map((item) => (
        <Article
            key = {item.id}
            title = {item.title}
            date = {item.date}
            preview = {item.preview}
            minutes = {item.minutes}
            />
    ))
    return <main>{articles}</main>
}

export default ArticleList;