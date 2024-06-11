import React, { useState, useEffect } from "react";

const HandleYT = ({ videoId }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideoSrc = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 4000)); // Add a delay
      const response = await fetch(
        `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`
      );
      await response.json();
      setLoading(false);
    };

    fetchVideoSrc();
  }, [videoId]);

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center w-full h-[300px] md:h-[500px] rounded-2xl bg-white bg-opacity-25">
          <div className="loader"></div>
        </div>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&showinfo=0&modestbranding=1&rel=0&fs=1&iv_load_policy=3&autohide=1&theme=dark&color=white`}
          frameBorder="0"
          allowFullScreen
          title="Video Player"
          className="w-full h-[300px] md:h-[500px] rounded-2xl"
        />
      )}
    </div>
  );
};

export default HandleYT;
