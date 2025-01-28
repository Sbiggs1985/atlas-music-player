import React from "react";
import PlayListItem from "./PlayListItem";

export default function Playlist() {
  const songs = [
    { title: "Song 1", artist: "Artist 1", duration: 210 },
    { title: "Song 2", artist: "Artist 2", duration: 180 },
    // Add more songs as needed
  ];

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Playlist</h2>
      <div className="flex flex-col gap-2">
        {songs.map((song, index) => (
          <PlayListItem
            key={index}
            title={song.title}
            artist={song.artist}
            duration={song.duration}
          />
        ))}
      </div>
    </div>
  );
}