import VideoItem from "./video-item";

const VideoList = ({ videos }) => {
  return (
    <ul>
      {videos.map((video) => (
        <VideoItem key={video.etag} videoSnippet={video.snippet} />
      ))}
    </ul>
  );
};

export default VideoList;
