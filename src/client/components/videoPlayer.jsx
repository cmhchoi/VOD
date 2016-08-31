import React from 'react';

export default class VideoPlayer extends React.Component {
  
  render() {
    const video = this.props.location.state.video
    console.log('playing video', video)
    return(
      <div style={{"background-color":"black"}}>
        <video id="video" height="100%" width="100%"  name="media" autoPlay control>
          <source src={video.contents[0].url} type="video/mp4"/>
        </video>
      </div>
    )
  }
  
}