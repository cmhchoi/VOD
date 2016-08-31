const Video = ({video}) => {
  <div>
    <h1>Home</h1>
    {videos.map((video) => {
      return(
        <div>
        {video.title}
        <Link to={{
          pathname: "/video"
        }}>
          <img src={video.images[0].url}/>
        </Link>
        </div>
      )
    })}
  </div>
}

export default Video;