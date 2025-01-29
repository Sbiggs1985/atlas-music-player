import React from 'react';

// Define props type for the component
interface SongTitleProps {
  title: string;
  artist: string;
}

const SongTitle: React.FC<SongTitleProps> = ({ title, artist }) => {
  return (
    <div className="w-400">
      <h2 className="text-xl text-black-900 font-bold">{title}</h2>
      <p className="text-sm text-gray-600">{artist}</p>
    </div>
  );
};

export default SongTitle;

// Props added: title & artist
// Instead of hardcoded values (painted in blue and Soul Canvas), the title & artist now change dynamcally based on props.
// Defined an interface SongTitleProps to ensure title & aartist are string.