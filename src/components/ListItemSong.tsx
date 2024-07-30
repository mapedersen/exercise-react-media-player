import { ReactElement } from "react";
import { IMedia } from "../interfaces";

import "./ListItemSong.css"

interface IListItemSongProps {
    song: IMedia;
}

export function ListItemSong({ song }: IListItemSongProps): ReactElement {
    return (
        <div className="listItemSong">
            <div className="mediaInfo">
                <img src={song.image} alt={song.title} ></img>
                <div className="MediaInfoText">
                    <p className="songArtist">{song.artist}</p>
                    <p className="songTitle">{song.title}</p>
                </div>
            </div>
            <span className="material-symbols-outlined"> play_arrow </span>
        </div>
    )
}