const User = require('./../db');

module.exports = {
  watched: (session, video, cb) => {
    console.log('watched triggered', session + ", " + video);
    User.findOne({ session }, (err, found) => {
      if(found) {
        found.videos.push(JSON.stringify(video));
        found.save(() => {
          cb(null, found);
        });
      } else {
        const newUser = new User({
          session: session,
          videos: [JSON.stringify(video)],
        })
        newUser.save(() => {
          cb(null, newUser);
        })
      }
    })
  },
  history: (session, cb) => {
    User.findOne({ session }, (err, found) => {
      if(found) {
        cb(null, found);
      } else {
        const newUser = User({
          session: session,
          videos: [],
        })
        newUser.save(() => {
          cb(null, newUser);
        })
      }
    })
  },
}