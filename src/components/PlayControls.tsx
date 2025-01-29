import React, { useState } from "react";
import { Play, Pause, Rewind, FastForward, Shuffle } from "lucide-react";

// Define types for songs and playback speeds
interface Song {
  id: number;
  title: string;
  artist: string;
}

const speedLevels: number[] = [0.5, 1, 2];

const PlayControls: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false); // Manage play/pause state
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1); // Manage playback speed
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0); // Manage the current song index
  const [isShuffle, setIsShuffle] = useState<boolean>(false); // Manage shuffle state

  const playlist: Song[] = [
    { id: 1, title: "Song 1", artist: "Artist 1" },
    { id: 2, title: "Song 2", artist: "Artist 2" },
    { id: 3, title: "Song 3", artist: "Artist 3" },
  ]; // Example playlist

  // Toggle play/pause state
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Change playback speed
  const changePlaybackSpeed = () => {
    const currentIndex = speedLevels.indexOf(playbackSpeed);
    const nextIndex = (currentIndex + 1) % speedLevels.length;
    setPlaybackSpeed(speedLevels[nextIndex]);
  };

  // Go to the previous song
  const goToPreviousSong = () => {
    if (currentSongIndex > 0) {
      setCurrentSongIndex(currentSongIndex - 1);
    }
  };

  // Go to the next song
  const goToNextSong = () => {
    if (isShuffle) {
      // Shuffle logic: Select a random song index, avoiding the current song
      const randomIndex = () => {
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * playlist.length);
        } while (newIndex === currentSongIndex);
        return newIndex;
      };
      setCurrentSongIndex(randomIndex());
    } else if (currentSongIndex < playlist.length - 1) {
      // Go to the next song if not the last song
      setCurrentSongIndex(currentSongIndex + 1);
    }
  };

  // Check if the back button should be disabled
  const isBackButtonDisabled = currentSongIndex === 0;

  // Check if the forward button should be disabled
  const isForwardButtonDisabled =
    !isShuffle && currentSongIndex === playlist.length - 1;

  // Toggle shuffle state
  const toggleShuffle = () => {
    setIsShuffle(!isShuffle);
  };

  return (
    <div className="flex justify-center items-center gap-8 mt-4">
      {/* Play Speed Button */}
      <button
        className="text-gray-700 hover:text-black text-lg font-medium"
        onClick={changePlaybackSpeed}
      >
        {playbackSpeed}x
      </button>

      {/* Back Button */}
      <button
        className={`flex items-center justify-center text-gray-700 ${
          isBackButtonDisabled ? "opacity-50 cursor-not-allowed" : "hover:text-black"
        }`}
        onClick={goToPreviousSong}
        disabled={isBackButtonDisabled}
      >
        <Rewind className="w-6 h-6" />
      </button>

      {/* Play/Pause Button */}
      <button
        className="flex items-center justify-center text-gray-700 hover:text-black"
        onClick={togglePlayPause}
      >
        {isPlaying ? (
          <Pause className="w-6 h-6" aria-label="Pause" />
        ) : (
          <Play className="w-6 h-6" aria-label="Play" />
        )}
      </button>

      {/* Forward Button */}
      <button
        className={`flex items-center justify-center text-gray-700 ${
          isForwardButtonDisabled ? "opacity-50 cursor-not-allowed" : "hover:text-black"
        }`}
        onClick={goToNextSong}
        disabled={isForwardButtonDisabled}
      >
        <FastForward className="w-6 h-6" />
      </button>

      {/* Shuffle Button */}
      <button
        className={`flex items-center justify-center ${
          isShuffle ? "text-blue-500" : "text-gray-700 hover:text-black"
        }`}
        onClick={toggleShuffle}
      >
        <Shuffle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default PlayControls;

// Uses explicit types for useState
// Ensured Typescript type safety throughout.
// Implemented Speed Button Logic: Used changePlayBackSpeed() to cycle through th speeds in order.
// Shows the current playback speed (0.5x) on the button


// Play Button update:
//  1. A boolean state (isPlaying) is used to manage whether the music currently playing or paused.
//  2. The play button toggles between the Play & Pause icons based on isPlaying
//  3. Added (aira-label) attributes to icons for accessibility
//  4. Play icon is displayed when isPlaying is false.
//  5. Pause icon is displayed when isPlaying is true.


// Playlist State
//  1. Added a playlist array to simulate a list of songs. Each song in the playlist has an id, title, and artist!
// currentSongIndex State
//  2. Tracks the current song's position in the playlist.
// Back Button Logic:
//  3. goPreviousSong: Decrements the currentSongIndex to move to the previous ong.
//  4. isBackButtonDisabled: Disables the back button when the currentSongIndex is 0.
// Button Styling
//  5. Disabled back button has reduced


// Forward Button:
//   * Skipping to the next song and handling the shuffle state.
//  Forward: disabled if the current song is the last song in playlist.
//  Next song: if shuffle mode isenabled, a random song is selected.
//  Shuffle: (isShuffle) allows the forward button to bypass the end of playlist restruction by randomly selecting a song.


// 