import { Box, Stack } from "@mui/material";
import React from "react";
import { VideoCard, ChannelCard } from "./index.js";
const Videos = ({ videos, direction = "row" }) => {
  if (!videos?.length) return "Loading...";
  return (
    <Stack direction={direction} flexWrap='wrap' justifyContent='start' gap={2}>
      {videos.map((item, idx) => {
        return (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
