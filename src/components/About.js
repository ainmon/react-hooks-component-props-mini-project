import React from "react";
// import blogData from "../data/blog";

function About(props){
    if (props){
        return ( 
                <aside>
                    <img src={props.image} />   
                </aside>
        )
    }
    else return (
                <aside>
                    <img src='https://via.placeholder.com/215'/>
                </aside>
    )
}

export default About;