import React, { useEffect, useState } from 'react';
import Search from '../../components/Search/Search';
import { BASE_URL } from '../../constants/urls';
import useRequestData from '../../hooks/useRequestData';
import VideoCard from '../../components/VideoCard/VideoCard';
import { useHistory } from "react-router-dom";
import { goToVideoDetails } from '../../router/coordinator';


const HomePage = () => {
  const [text, setText] = useState('');
  const history = useHistory();

  const API_KEY= process.env.REACT_APP_PASSWORD;

  const onClickDetail = (id) => {
    goToVideoDetails(history, id)
  }
    
const videosList = useRequestData([], `${BASE_URL}/search?part=id,snippet&q=${text}&key=${API_KEY}`, "items" )[0]
console.log("OI, SOU A REQUISIÇÃO::", videosList)
console.log(text)

const searchList = videosList && videosList.map((video) => {
  return <VideoCard
    key = {video.id.videoId}
    img = {video.snippet.thumbnails.medium.url}
    title = {video.snippet.title}
    channelTitle = {video.snippet.channelTitle}
    description = {video.snippet.description}
    onClick = {() => onClickDetail(video.id.videoId)}
  />

})
// console.log("oi, sou a descrição", searchList)
  return (
    <div>
      <Search 
        value={text}
        onChange={(search) => setText(search)}
      />
       {searchList}
    </div>
  );
}

export default HomePage;