import React, { useState, useEffect } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";
import LoadingSkeleton from "@/components/LoadingSkeleton";

// Define the type for a song based on the API response
interface Song {
  id: string;
  title: string;
  artist: string;
  genre: string;
  duration: number;
}

const MusicPlayer: React.FC = () => {
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [currentSongId, setCurrentSongId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await fetch("/api/v1/playlist");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: Song[] = await response.json();
        setPlaylist(data);
        setCurrentSongId(data[0]?.id || null);
      } catch (error) {
        console.error("Failed to fetch playlist:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlaylist();
  }, []);

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  const currentSong = playlist.find((song) => song.id === currentSongId);

  return (
    <div className="flex flex-col md:flex-row mx-auto bg-lightBg dark:bg-gray-800 text-lightText dark:text-gray-200 border-lightBorder dark:border-gray-600 rounded-lg shadow-lg p-6 gap-6 max-w-5xl font-coolFont transition-all duration-300">
      {/* Currently Playing Section */}
      <div className="flex-1 bg-white dark:bg-gray-700 text-darkPurple dark:text-gray-200 rounded-lg shadow-lg p-6">
        <CurrentlyPlaying currentSong={currentSong} />
      </div>

      {/* Playlist Section */}
      <div className="flex-1 bg-softGray dark:bg-gray-700 text-darkPurple dark:text-gray-200 rounded-lg shadow-lg p-6">
        <Playlist
          songs={playlist}
          currentSongId={currentSongId}
          onSongSelect={(id) => setCurrentSongId(id)}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;