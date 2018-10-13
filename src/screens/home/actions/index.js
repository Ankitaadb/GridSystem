import { api } from "../../../utils/api";

export const getVideos = (keyword, cb) => {
    api({
      url: `https://api-videos.herokuapp.com/youtube?q=${keyword}`,
    })
      .then(data => {
        cb(data.videos || [])
      })
      .catch((error) => {
        cb([])
      });
  };