import React, { useState, useEffect } from "react"

const API_ENDPOINT = 'https://dummyjson.com/products'

const PostsMain = () => {
    const [post, setPost] = useState({})

    useEffect(() => {
        getDataFromApi()
    }, [])

    const getDataFromApi = () => {
        fetch(API_ENDPOINT)
            .then((response) => response.json())
            .then((data) => setPost(data))
            .catch(err => console.error(err))
    }

    return (
        <div>
            {post?.map(p =>
                <div key={p.products.id}>
                    <h1>{p.products.title}</h1>
                    {/* <img src = {p.thumbnail}/> */}
                    {/* <h2>{p.price}</h2> */}
                </div>
            )}
        </div>
    )
}

export default PostsMain;
