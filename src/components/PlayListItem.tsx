import React from "react";

// Define the props type
interface PlayListItemProps {
  title: string; // Song title
  artist: string; // Artist name
  duration: number; // Duration in seconds
  isSelected: boolean; // Indicates if the item is currently selected
  onClick: () => void; // Click handler
}

const PlayListItem: React.FC<PlayListItemProps> = ({
  title,
  artist,
  duration,
  isSelected,
  onClick,
}) => {
  // Format duration from seconds to HH:MM format
  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return hours > 0
      ? `${hours}:${minutes.toString().padStart(2, "0")}:${remainingSeconds
          .toString()
          .padStart(2, "0")}`
      : `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div
      className={`flex justify-between items-center p-4 rounded-lg cursor-pointer ${
        isSelected ? "bg-blue-500 text-white" : "hover:bg-gray-100"
      }`}
      onClick={onClick}
      role="button"
      aria-pressed={isSelected}
      tabIndex={0}
    >
      {/* Song Title and Artist */}
      <div>
        <p className="text-lg font-bold">{title}</p>
        <p className="text-sm text-gray-500">{artist}</p>
      </div>

      {/* Duration */}
      <div className="text-sm text-gray-500">{formatTime(duration)}</div>
    </div>
  );
};

export default PlayListItem;

// Props type: Added a PlayListItemProps interface to define the types for props:
//  * title(string), artist(string), duration(number), isSelected(boolean).