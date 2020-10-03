const VideoItem = ({ videoSnippet }) => {
  return (
    <li>
      <img src={videoSnippet.thumbnails.medium.url} alt={videoSnippet.title} />;
      <h1>{videoSnippet.title}</h1>
      <h1>{videoSnippet.channelTitle}</h1>
    </li>
  );
};

export default VideoItem;
