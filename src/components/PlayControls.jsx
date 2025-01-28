import React, { useState } from "react";
import { Play, Pause, Rewind, FastForward, Shuffle } from "lucide-react";

const PlayControls = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex justify-center items-center gap-8 mt-4">
      {/* Play Speed Button */}
      <button className="text-gray-700 hover:text-black text-lg font-medium">
        1x
      </button>

      {/* Back Button */}
      <button className="flex items-center justify-center text-gray-700 hover:text-black">
        <Rewind className="w-6 h-6" />
      </button>

      {/* Play/Pause Button */}
      <button
        className="flex items-center justify-center text-gray-700 hover:text-black"
        onClick={togglePlayPause}
      >
        {isPlaying ? (
          <Pause className="w-6 h-6" />
        ) : (
          <Play className="w-6 h-6" />
        )}
      </button>

      {/* Forward Button */}
      <button className="flex items-center justify-center text-gray-700 hover:text-black">
        <FastForward className="w-6 h-6" />
      </button>

      {/* Shuffle Button */}
      <button className="flex items-center justify-center text-gray-700 hover:text-black">
        <Shuffle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default PlayControls;