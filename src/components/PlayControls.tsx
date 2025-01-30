import React from "react";
import { Play, Pause, Rewind, FastForward, Shuffle } from "lucide-react";

// Define types for props
interface PlayControlsProps {
  isPlaying: boolean;
  playbackSpeed: number;
  isShuffle: boolean;
  onPlayPause: () => void;
  onChangeSpeed: () => void;
  onPreviousSong: () => void;
  onNextSong: () => void;
  onToggleShuffle: () => void;
  isBackDisabled: boolean;
  isForwardDisabled: boolean;
}

const PlayControls: React.FC<PlayControlsProps> = ({
  isPlaying,
  playbackSpeed,
  isShuffle,
  onPlayPause,
  onChangeSpeed,
  onPreviousSong,
  onNextSong,
  onToggleShuffle,
  isBackDisabled,
  isForwardDisabled,
}) => {
  return (
    <div className="flex justify-center items-center gap-8 mt-4">
      {/* Play Speed Button */}
      <button
        className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-lg font-medium"
        onClick={onChangeSpeed}
        aria-label={`Change playback speed to ${playbackSpeed}x`}
      >
        {playbackSpeed}x
      </button>

      {/* Back Button */}
      <button
        className={`flex items-center justify-center text-gray-700 dark:text-gray-300 ${
          isBackDisabled ? "opacity-50 cursor-not-allowed" : "hover:text-black dark:hover:text-white"
        }`}
        onClick={onPreviousSong}
        disabled={isBackDisabled}
        aria-label="Previous song"
      >
        <Rewind className="w-6 h-6" />
      </button>

      {/* Play/Pause Button */}
      <button
        className="flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
        onClick={onPlayPause}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
      </button>

      {/* Forward Button */}
      <button
        className={`flex items-center justify-center text-gray-700 dark:text-gray-300 ${
          isForwardDisabled ? "opacity-50 cursor-not-allowed" : "hover:text-black dark:hover:text-white"
        }`}
        onClick={onNextSong}
        disabled={isForwardDisabled}
        aria-label="Next song"
      >
        <FastForward className="w-6 h-6" />
      </button>

      {/* Shuffle Button */}
      <button
        className={`flex items-center justify-center ${
          isShuffle ? "text-blue-500" : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
        }`}
        onClick={onToggleShuffle}
        aria-label={isShuffle ? "Disable shuffle mode" : "Enable shuffle mode"}
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