import React, { ChangeEvent } from "react";
import { Volume2 } from "lucide-react";

// Define props for external state control
interface VolumeControlsProps {
  volume: number;
  onChangeVolume: (value: number) => void;
}

const VolumeControls: React.FC<VolumeControlsProps> = ({ volume, onChangeVolume }) => {
  // Handle volume change event
  const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeVolume(Number(event.target.value));
  };

  return (
    <div className="flex items-center gap-4 w-full">
      {/* Volume Icon */}
      <Volume2 className="w-6 h-6 text-lightPurple dark:text-lightPurple" aria-hidden="true" />

      {/* Range Slider */}
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={handleVolumeChange}
        className="w-full h-2 bg-blackSlider dark:bg-blackSlider rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-lightPurple"
        aria-label="Volume Control"
        aria-valuenow={volume}
      />

      {/* Volume Display */}
      <span className="text-sm text-lightPurple dark:text-lightPurple font-coolFont">
        {volume}%
      </span>
    </div>
  );
};

export default VolumeControls;

// TypeScript Integration
// - Added TypeScript typing for useState (number) and event handling (ChangeEvent<HTMLInputElement>).
// - handleVolumeChange Function: Updates the volume state dynamically as the slider moves.
// - Converts the slider value from string to number using Number().
