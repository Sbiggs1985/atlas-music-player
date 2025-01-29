import React from "react";
import PlayListItem from "./PlayListItem";

// Define types for props
interface Song {
  id: string;
  title: string;
  artist: string;
  genre: string;
  duration: number;
}

interface PlaylistProps {
  songs: Song[];
  currentSongId: string | null;
  onSongSelect: (id: string) => void;
}

const Playlist: React.FC<PlaylistProps> = ({ songs, currentSongId, onSongSelect }) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Playlist</h2>
      <div className="flex flex-col gap-2">
        {songs.map((song) => (
          <PlayListItem
            key={song.id}
            title={song.title}
            artist={song.artist}
            duration={song.duration}
            isSelected={currentSongId === song.id}
            onClick={() => onSongSelect(song.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Playlist;