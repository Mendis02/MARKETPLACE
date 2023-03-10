import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const API_ENDPOINT = 'https://dummyjson.com/products/'

const PostDetails = () => {
    const [postDetails, setPostDetails] = useState({})

    let {id} = useParams();

    useEffect( ()=>{
        getDataFromApi(id)
    }, [])

    const getDataFromApi = (id) => {
        fetch(API_ENDPOINT + id)
            .then((response) => response.json())
            .then((d) => setPostDetails(d))
            .catch(err => console.error(err))
    }

    return(
        <div>
            <Router>
                <Link to= "/">Home</Link>
            </Router>
            <h2>{postDetails.products.price}</h2>
            <h2>{postDetails.products.description}</h2>
            <h2>{postDetails.products.stock}</h2>
        </div>
    )




}

export default PostDetails