import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
    // const [blogs,setBlogs]=useState(null);
    // const [IsPending,setIsPending]=useState(true);
    // const [error, setError]=useState(null);
    // useEffect(()=>{
    //     setTimeout(() => {
    //         fetch('http://localhost:8000/blogs')
    //           .then(res=>{
    //             if(!res.ok){
    //                 throw Error('could not fetch data for that resource')
    //             }
    //            return res.json();
    //           })
    //           .then((data)=>{
    //            setBlogs(data)
    //            setIsPending(false);
    //            setError(null);
    //           })
    //           .catch(err => {
    //             setIsPending(false);
    //             setError(err.message);
    //           })
    //     }, 1000);
    // },[])

    // const handleClick= ()=>{
    //     setName('luigi')
    // }
    // const handleClickAgain=(name)=>{
    //     console.log('HEllo'+name);
    // }
    const  { data:blogs, IsPending, error}= useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            {/* <h2>Home Page</h2> */}
            {/* <p>{name}</p>
            <button onClick={handleClick}>Click Me</button> */}
            {/* <button onClick={()=>handleClickAgain(' Mario')}>Click me again</button> */}

            {/* {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))} */}
            {error && <div>{error}</div>}
            {IsPending && <div>Loading...</div>}
            {blogs && <Bloglist blogs={blogs} title="All Blogs!" />}
        </div>
     );
}
 
export default Home;