import React from 'react';

// Define the props type
interface CoverArtProps {
  albumArtUrl: string | null; // Album artwork URL or null if not available
}

const CoverArt: React.FC<CoverArtProps> = ({ albumArtUrl }) => {
  return (
    <div className="flex justify-center">
      <img
        src={albumArtUrl || require('../assets/placeholder.svg')} // Use placeholder if no artwork is available
        alt="Album Cover"
        className="rounded-lg shadow-md"
      />
    </div>
  );
};

export default CoverArt;

// Prop added: albumUrl
// The CoverArt component accepts a prop "albumUrl" (a string or null), representing the URL for the current songs album work.
// Fallback: If albumUrl is not provided (is bull) it defaults to placeholder image
// Typescript typing: Defined an interface CoverArtProps for the props & passed it to the component using React.FC<CoverArtProps>