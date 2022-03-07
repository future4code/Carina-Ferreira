import React from 'react';
import Search from '../../components/Search/Search';
import VideoDetailCard from '../../components/VideoDetailCard/VideoDetailCard';
import { useParams } from 'react-router-dom';
// import { goToVideoDetails } from '../../router/coordinator';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls';

const DetailsPage = () => {
  const params = useParams()
  
  const VIDEO_ID = params.id

  const API_KEY= process.env.REACT_APP_PASSWORD;

  const videoDetail = useRequestData([], `${BASE_URL}/videos?id=${VIDEO_ID}&part=snippet,statistics&key=${API_KEY}`, "items") [0]
  console.log("OI, SOU A DETAILS REQ::", videoDetail)

  const videoDetailInfo = videoDetail && videoDetail.map((detail) => {
    return <VideoDetailCard
      key = {detail.id}
      img = {detail.snippet.thumbnails.medium.url}
      title = {detail.snippet.title}
      channelTitle = {detail.snippet.channelTitle}
      description = {detail.snippet.description}
      VIDEO_ID = {detail.id}
      likeCount = {detail.statistics.likeCount}
      viewCount = {detail.statistics.viewCount}
    />
  })

  return (
    <div>
      {videoDetailInfo}
    </div>
  );
}

export default DetailsPage;