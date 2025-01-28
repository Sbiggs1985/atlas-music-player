import React from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

export default function MusicPlayer() {
  return (
    <div
      className="flex flex-col md:flex-row mx-auto bg-gray-100 border border-black rounded-lg shadow-lg p-4 gap-4 max-w-[896px]"
    >
      {/* Currently Playing Section */}
      <div className="flex-1 bg-white rounded-lg shadow-lg p-4">
        <CurrentlyPlaying />
      </div>

      {/* Playlist Section */}
      <div className="flex-1 bg-white rounded-lg shadow-lg p-4">
        <Playlist />
      </div>
    </div>
  );
}