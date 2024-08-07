import { useEffect, useState } from "react"
import "./Videos.css"

function Videos() {
    const [videos, setVideos] = useState([])
    const fetchVideos = () => {
        return fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCTF4TQOFZMc1jxKhE4fEeNw&key=AIzaSyA4ihuAPwrE65k3_MHj1gtGSDcTZkbPcS0&maxResults=50&order=viewcount")
            .then(res => { return res.json() })
            .then(data => data.items)
            .catch(err => console.log(err))
    }

    useEffect(() => {
        (async function () {
            const data = await fetchVideos()
            setVideos(data.slice(0, 3))
        })()
    }, [])

    return (
        <div className="video-wrapper" id="content">
            <p className="badge color-primary">Content</p>
            <h1 className="heading font-title">Videos</h1>
            <div className="videos-posts">
                {videos.map(v => (
                    <div className="vid" onClick={() => window.open("https://www.youtube.com/@nishantbharihoke")}>
                        <div className="banner">
                            <img src={v.snippet.thumbnails.high.url} alt="Image of a laptop and a notebook" />
                        </div>
                        <div className="tag">Criminal Law</div>
                        <div className="title">{v.snippet.title}</div>
                        <div className="blurb color-mute">{v.snippet.description}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Videos 