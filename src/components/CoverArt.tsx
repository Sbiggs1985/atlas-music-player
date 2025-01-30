import React from "react";
import placeholderImage from "../assets/placeholder.svg";

interface CoverArtProps {
  albumArtUrl?: string;
}

const CoverArt: React.FC<CoverArtProps> = ({ albumArtUrl }) => {
  console.log("🖼️ CoverArt Component Received:", albumArtUrl || "No Image Available"); // Debugging log

  return (
    <div className="flex justify-center">
      <img
        src={albumArtUrl || placeholderImage} // Use the placeholder image if albumArtUrl is not provided
        alt="Album Cover"
        className="rounded-lg shadow-md w-40 h-40 object-cover"
      />
    </div>
  );
};

export default CoverArt;

// Prop added: albumUrl
// The CoverArt component accepts a prop "albumUrl" (a string or null), representing the URL for the current songs album work.
// Fallback: If albumUrl is not provided (is bull) it defaults to placeholder image
// Typescript typing: Defined an interface CoverArtProps for the props & passed it to the component using React.FC<CoverArtProps>