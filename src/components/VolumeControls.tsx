import React, { useState, ChangeEvent } from "react";
import { Volume2 } from "lucide-react";

const VolumeControls: React.FC = () => {
  const [volume, setVolume] = useState<number>(50); // Default volume level at 50%

  // Handle volume change
  const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(event.target.value)); // Convert slider value to a number
    // Add logic to adjust the actual audio volume if needed
  };

  return (
    <div className="flex items-center gap-4 w-full">
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
        aria-label="Volume Control"
      />

      {/* Volume Display (Optional) */}
      <span className="text-sm text-gray-700">{volume}%</span>
    </div>
  );
};

export default VolumeControls;

// TypeScript Integration
// - Added TypeScript typing for useState (number) and event handling (ChangeEvent<HTMLInputElement>).
// - handleVolumeChange Function: Updates the volume state dynamically as the slider moves.
// - Converts the slider value from string to number using Number().
