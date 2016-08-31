export const getVideos = (videos) => {
  return {
    type: 'GET_VIDEOS',
    videos
  }
}

export const watchedVideo = (video) => {
  return {
    type: 'WATCHED_VIDEO',
    video
  }
}

