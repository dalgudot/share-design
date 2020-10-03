import { useState, useEffect } from "react";

const requestOptions = {
  method: "GET",
  redirect: "follow",
};

export const search = (query) => {
  fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyAd_zcU7ts6bU92RpMc3XaLQs6-U8iaPx4`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) =>
      result.items.map((item) => ({ ...item, id: item.id.videoId }))
    );
};

export const mostPopular = () => {
  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=reactJS Tutorial&key=AIzaSyAd_zcU7ts6bU92RpMc3XaLQs6-U8iaPx4",
      requestOptions
    ).then((response) => response.json());
  }, []);
};
