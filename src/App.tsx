import { ListItems } from "./components/ListItems";
import { MediaPlayer } from "./components/MediaPlayer";
import { mediaCurrentSong } from "./data";


import "./App.css"

export function App() {
  return (
    <>
      <ListItems />
      <MediaPlayer song={mediaCurrentSong}/>
    </>
  );
}
