import src from '@emotion/styled';
import React from 'react';
import youtube from "../../assets/images/youtube.jpg";

const VideoCard = ({ video }) => {
  return (
    <div className="bg-white rounded-lg  p-4 w-full  h-auto flex flex-col"> {/* Set a fixed height */}
      <img 
        src={youtube} 
        alt={video.title} 
        className="w-full h-auto object-cover rounded-md mb-2" 
      />
      
      <p className="text-gray-600 text-[12px]">{video.description}</p>
    </div>
  );
};

export default VideoCard;

