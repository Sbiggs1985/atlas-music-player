import React from "react";

export default function PlayListItem({ title, artist, duration, isSelected, onClick }) {
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div
      className={`flex justify-between items-center p-4 rounded-lg cursor-pointer ${
        isSelected ? "bg-blue-500 text-white" : "hover:bg-gray-100"
      }`}
      onClick={onClick}
    >
      {/* Song Title and Artist */}
      <div>
        <p className="text-lg font-bold">{title}</p>
        <p className="text-sm text-gray-500">{artist}</p>
      </div>

      {/* Duration */}
      <div className="text-sm text-gray-500">
        {formatTime(duration)}
      </div>
    </div>
  );
}