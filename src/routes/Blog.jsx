import Navbar from "../components/Navbar"
import ReviewForm from "../components/ReviewForm"
import GhostContentAPI from '@tryghost/content-api'
import "./Blog.css"
import { useEffect, useState } from "react"

function Blog() {
    const [allPosts, setAllPosts] = useState([])

    useEffect(() => {
        const api = new GhostContentAPI({
            url: 'https://nishants-blog.ghost.io',
            key: '0b5a068368e014ae3e14d7b5f3',
            version: "v3.0"
        });

        api.posts.browse()
            .then(posts => setAllPosts(posts))
    }, [])

    return (
        <>
            <Navbar />

            <div className="blog-container">
                <div className="highlight-container">
                    <div className="highlight-header">
                        <h3 className="font-title">Highlights</h3>
                    </div>

                    <div className="highlights-row">
                        {allPosts.map(p => (
                            <div className="single-highlight">
                                <div className="highlight-thumbnail">
                                    <img placeholder="Highlight thumbnail" src={p.feature_image} />
                                </div>
                                <p className="highlight-tag">{p.slug}</p>
                                <div className="font-title highlight-title">{p.title}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog