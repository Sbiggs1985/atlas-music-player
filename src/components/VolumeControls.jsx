import React, { useState } from "react";
import { Volume2 } from "lucide-react";

const VolumeControls = () => {
  const [volume, setVolume] = useState(50); // Default volume level at 50%

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  return (
    <div className="flex items-center gap-4">
      {/* Volume Icon */}
      <Volume2 className="w-6 h-6 text-black" />

      {/* Range Slider */}
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={handleVolumeChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  );
};

export default VolumeControls;