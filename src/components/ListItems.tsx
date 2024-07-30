import { ReactElement } from "react";
import { ListItemSong } from "./ListItemSong";
import { mediaList } from "../data";

import "./ListItems.css"


export function ListItems(): ReactElement {
    return (
        <div className="listItems">
            {mediaList.map((song) => (
                <ListItemSong key={song.title} song={song} />
            ))}
        </div>
    )
}