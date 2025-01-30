import React from "react";
import PlayListItem from "./PlayListItem";

// Define the song object type
interface Song {
  id: string;
  title: string;
  artist: string;
  duration: number;
}

// Define props for Playlist component
interface PlaylistProps {
  songs: Song[];
  currentSongId: string | null;
  onSongSelect: (id: string) => void;
}

const Playlist: React.FC<PlaylistProps> = ({ songs, currentSongId, onSongSelect }) => {
  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-darkPurple dark:text-lightPurple mb-4">
        Playlist
      </h2>

      {/* Playlist Items */}
      <div className="flex flex-col gap-2">
        {songs.length > 0 ? (
          songs.map((song) => (
            <PlayListItem
              key={song.id}
              title={song.title}
              artist={song.artist}
              duration={song.duration}
              isSelected={song.id === currentSongId}
              onClick={() => onSongSelect(song.id)}
            />
          ))
        ) : (
          <p className="text-gray-500">No songs available.</p>
        )}
      </div>
    </div>
  );
};

export default Playlist;