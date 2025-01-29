import React, { useEffect, useRef } from "react";

interface AudioPlayerProps {
  audioUrl: string | null; // URL of the currently selected song
  isPlaying: boolean; // Indicates if the song should be playing
  volume: number; // Volume level (0 to 1)
  playbackSpeed: number; // Playback speed (e.g., 0.5x, 1x, 2x)
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  audioUrl,
  isPlaying,
  volume,
  playbackSpeed,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null); // Reference to the audio element

  // Update audio element whenever the audio URL changes
  useEffect(() => {
    if (audioRef.current && audioUrl) {
      audioRef.current.src = audioUrl;
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [audioUrl]);

  // Handle play/pause changes
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  // Update volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Update playback speed
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed]);

  return <audio ref={audioRef} hidden />;
};

export default AudioPlayer;

// * audioUrl: The URL of the currently selected song.
// * isPlaying: Boolean that determines if the song is playing or paused.
// * volume: Volume level as a value between 0 and 1.