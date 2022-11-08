import { useState, useEffect, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Collections from "./components/pages/Collections";
import Tunes from "./components/pages/Tunes";
import Error404 from "./components/pages/Error404";
import ErrorBoundary from "./components/ErrorBoundary";

export const SongContext = createContext();
function App() {
  const [newSongs, setNewSongs] = useState([]);
  const [playlists] = useState("playlist");
  const [newReleases, setNewReleases] = useState([]);
  const [popularSongs, setPopularSongs] = useState([]);

  // Fetch Playlists Data
  useEffect(() => {
    fetch(`https://musica-api.up.railway.app/${playlists}`)
      .then((res) => res.json())
      .then((data) => {
        setNewSongs(data);
      });
  }, [playlists]);

  // Fetch New Releases Songs Data
  useEffect(() => {
    fetch(`https://musica-api.up.railway.app/new`)
      .then((res) => res.json())
      .then((data) => {
        setNewReleases(data);
      });
  }, []);

  // Fetch Popular Songs Data
  useEffect(() => {
    fetch(`https://musica-api.up.railway.app/popular`)
      .then((res) => res.json())
      .then((data) => {
        setPopularSongs(data);
      });
  }, []);

    return (
      <ErrorBoundary>
      <SongContext.Provider value={{ newSongs, newReleases, popularSongs }}>
        <Routes>
          <Route path="/">
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="collections" element={<Collections />} />
              <Route path="tunes/:charts" element={<Tunes />} />
            </Route>
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </SongContext.Provider>
  </ErrorBoundary>
  );
}

export default App;
