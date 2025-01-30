import React from "react";
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";

interface CurrentlyPlayingProps {
  currentSong: {
    title: string;
    artist: string;
    cover?: string;
  } | null;
}

const CurrentlyPlaying: React.FC<CurrentlyPlayingProps> = ({ currentSong }) => {
  console.log("🎶 Currently Playing Song:", currentSong); // Debugging log

  return (
    <div className="flex flex-col items-center gap-4">
      <CoverArt albumArtUrl={currentSong?.cover} />
      <SongTitle title={currentSong?.title || "Unknown"} artist={currentSong?.artist || "Unknown"} />
      <PlayControls />
      <VolumeControls />
    </div>
  );
};

export default CurrentlyPlaying;