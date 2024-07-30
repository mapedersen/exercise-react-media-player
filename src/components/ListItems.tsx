import { ReactElement } from "react";
import { IMedia } from "../interfaces";
import { ListItemSong } from "./ListItemSong";
import { media } from "../data";


export function ListItems(): ReactElement {
    return (
        <div className="listItems">
            {media.map((song, index) => (
                <ListItemSong key={index} song={song} />
            ))}
        </div>
    )
}