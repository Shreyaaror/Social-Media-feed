import React, { useState ,useEffect} from 'react'
import axios from "axios"
export const Feed = () => {
    const [posts,setPosts] = useState([
        {
            _id : 1,
            image : "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            caption : "beautiful scenery"
        }
    ])
    useEffect( ()=>{
        axios.get("http://localhost:3000/posts")
        .then((res)=>{
            setPosts(res.data.posts)
        })
    },[])
  return (
    <section className='feed-section'>
        {
            posts.length>0 ? (
                posts.map((post)=>(
                    <div key = {post._id} className='post-card'>
                        <img src={post.image} alt={post.caption} />
                        <p>{post.caption}</p>
                    </div>
                ))
            ) :
            (
                <h1>NO POST AVAILABLE</h1>
            )
        }
    </section>
  )
}
export default Feed;