import React from "react";

import { Videos, ChannelCard } from "./";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useState } from "react";
import { useEffect } from "react";
import { Box } from "@mui/material";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  console.log(channelDetail, videos);
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);
  console.log(channelDetail?.snippet?.thumbnails?.high.url);
  return (
    <Box minHeight='96vh'>
      <Box>
        <div
          style={{
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${channelDetail?.snippet?.thumbnails?.high.url})`,
            // filter: "blur(2px)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop='-110px' />
        <Box display='flex' p='2'>
          <Box sx={{ mr: { sm: "100px" } }} />
          <Videos videos={videos} />
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
