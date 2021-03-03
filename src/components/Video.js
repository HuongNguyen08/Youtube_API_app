import React from "react";
import "./styles/_video.css";

function selectVideo(videoIdObj, onVideoSelected) {
  onVideoSelected(videoIdObj.videoId);
}
function getCss(imageurl) {
    const _styles = {
        backgroundImage: `url(${imageurl})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "180px",
        position: "relative"
      };
      return _styles;
}
 function hideVideo(index, vidoesData){
     console.log(index, vidoesData);
     vidoesData.splice(index, 1);
 }

function constructVideoTitles(vidoesData, onVideoSelected) {
  return vidoesData.sort((a,b) => new Date(b.snippet.publishTime).getTime() - new Date(a.snippet.publishTime).getTime())
  .map(({ snippet, id }, index) => {
    return (
      <div 
      className="video" 
      key={index}>
        <div onClick={() => selectVideo(id, onVideoSelected)}>
            <div style={getCss(snippet.thumbnails.high.url)} key={index} />
            <div className="desc">
            <p>{snippet.title}</p>
            <p>{snippet.publishTime.substring(0,10)}</p>
            </div>
            <button className='btn-hide' onClick={() => hideVideo(index, vidoesData)} >Hide Video</button>
        </div>
      </div>  
    );
  });
}
const Video = ({ data, onVideoSelected }) => {
  return <>{constructVideoTitles(data, onVideoSelected)}</>;
};

export default Video;