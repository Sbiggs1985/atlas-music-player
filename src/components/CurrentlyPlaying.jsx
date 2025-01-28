import React from "react";
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";

export default function CurrentlyPlaying() {
  return (
    <div className="flex flex-col items-center gap-4">
      <CoverArt />
      <SongTitle title="Sample Song" artist="Sample Artist" />
      <PlayControls />
      <VolumeControls />
    </div>
  );
}