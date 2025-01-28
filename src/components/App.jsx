import React from "react";
import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";

function App() {
  return (
    <div className="justify-between flex flex-col h-full p-8 min-h-screen bg-gradient-to-t from-vista-blue-50 to-vista-blue-600">
      <MusicPlayer />
      <Footer />
    </div>
  );
}

export default App;
