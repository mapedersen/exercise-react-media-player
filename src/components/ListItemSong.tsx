import { ReactElement } from "react";
import { IMedia } from "../interfaces";

import "./ListItemSong.css"

interface IListItemSongProps {
    song: IMedia;
}

export function ListItemSong({ song }: IListItemSongProps): ReactElement {
    return (
        <div className="listItemSong">
            <img src="{song.image}" alt="{song.title}" ></img>
            <div className="mediaInfo">
                <p>{song.artist}</p>
                <p>{song.title}</p>
            </div>
            <span className="material-symbols-outlined"> play_arrow </span>
        </div>
    )
}