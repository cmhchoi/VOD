import React from 'react';
import Video from './video.jsx';
import { Link } from 'react-router';
import $ from "jquery";

export default class Home extends React.Component {
  
  render() {
    const videos = this.props.location.state.videos;
    console.log('home state', this.props.location);
    return(
      <div>
        <div className="videoReel">
          {videos.map((video) => {
            return(
              <Link className="video" to={{
                pathname: "/video",
                state: { video: video }
                }}
                onClick={(e) => {
                console.log('clicked video', video);
                $.post("http://localhost:8080/api/video", video, (videos) => {
                  console.log("history", videos);
                }, "json");
              }}>
                <div className="videoEntry">
                  <img className="videoImage" src={video.images[0].url} />
                  <p className="videoName">{video.title}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    )
  }
  
}