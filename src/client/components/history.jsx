import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

export default class History extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      history: [],
    };
  }

  componentWillMount() {
    this.historyRequest = $.get("http://localhost:8080/api/history", data => {
      const history = [];
      data.videos.forEach((video) => {
        history.push(JSON.parse(video));
      })
      this.setState({
        history: history,
      });
    })
  }

  render() {
    const videos = this.state.history;
    return(
      <div className="videoReel">
        {videos.map((video) => {
          return(
            <Link className="video" to={{
              pathname: "/video",
              state: { video: video }
              }}>
              <div className="videoEntry">
              <img className="videoImage" src={video.images[0].url} />
            <p className="videoName">{video.title}</p>
            </div>
            </Link>
          )
        })}
      </div>
    )
  }
}