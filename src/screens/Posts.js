import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Link
    } from "react-router-dom";

const API_ENDPOINT = 'https://dummyjson.com/products/'

const PostsMain = () => {
    const [post, setPost] = useState({})

    useEffect(() => {
        getDataFromApi()
    }, [])

    const getDataFromApi = () => {
        fetch(API_ENDPOINT)
            .then((response) => response.json())
            .then((data) => setPost(data))
            .catch(err => console.error(err));
    }

    return (
        <div className = "card">
            {post.products?.map(p =>
                <div key={p.id}>
                    <h1>{p.id}</h1>
                    <Router>
                        <Link to = {"/" + p.id}>{p.title}</Link>
                    </Router>
                    {/* <img src = {p.thumbnail}/>
                    <h2>Price: ${p.price}</h2>
                    <h3>Rating: {p.rating}</h3>
                    <h3>{p.stock}</h3> */}
                </div>
            )}
        </div>
    )
}

export default PostsMain;
