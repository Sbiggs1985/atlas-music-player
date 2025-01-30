import React, { useState, useEffect } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";
import LoadingSkeleton from "@/components/LoadingSkeleton";

// Define the Song type with album cover
interface Song {
  id: string;
  title: string;
  artist: string;
  genre: string;
  duration: number;
  cover?: string; // Added field for album artwork
}

const MusicPlayer: React.FC = () => {
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Fetch Playlist Data
  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await fetch("/api/v1/playlist");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: Song[] = await response.json();
        setPlaylist(data);

        // Set first song as the current song and fetch full details
        if (data.length > 0) {
          fetchSongDetails(data[0].id);
        }
      } catch (error) {
        console.error("Failed to fetch playlist:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlaylist();
  }, []);

  // Fetch full song details including the album cover
  const fetchSongDetails = async (songId: string) => {
    try {
      const response = await fetch(`/api/v1/songs/${songId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const songData: Song = await response.json();
      console.log("🎶 Full Song Data:", songData); // Debugging log

      setCurrentSong(songData);
    } catch (error) {
      console.error("Failed to fetch song details:", error);
    }
  };

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="flex flex-col md:flex-row mx-auto 
      bg-lightBg text-lightText border-lightBorder 
      dark:bg-darkBg dark:text-darkText dark:border-darkBorder
      rounded-lg shadow-lg p-6 gap-6 max-w-5xl font-coolFont transition-all duration-300">
      
      {/* Currently Playing Section */}
      <div className="flex-1 bg-darkPurple text-lightPurple rounded-lg shadow-lg p-6">
        <CurrentlyPlaying currentSong={currentSong} />
      </div>

      {/* Playlist Section */}
      <div className="flex-1 bg-softGray text-darkPurple rounded-lg shadow-lg p-6">
        <Playlist
          songs={playlist}
          currentSongId={currentSong?.id || ""}
          onSongSelect={fetchSongDetails} // Fetch song details when selecting a song
        />
      </div>
    </div>
  );
};

export default MusicPlayer;