import { ReactElement } from "react";
import { IMedia } from "../interfaces";

import "./MediaPlayer.css"

interface ICurrentSongProps {
    song: IMedia;
}

export function MediaPlayer({ song }: ICurrentSongProps): ReactElement {
    return (
        <div className="currentSong">
            <img src="{song.image}" alt="{song.title}" />
            <span className="material-symbols-outlined"> Add </span>
            <div>
                <p>{song.title}</p>
                <p>{song.artist}</p>
            </div>
            <span className="material-symbols-outlined"> Favorite </span>
            <div className="timeline">

            </div>
            <div className="playControls">
                <span className="material-symbols-outlined"> Repeat </span>
                <span className="material-symbols-outlined"> skip_previous </span>
                <span className="material-symbols-outlined"> play_circle </span>
                <span className="material-symbols-outlined"> skip_next </span>
                <span className="material-symbols-outlined"> Shuffle </span>
            </div>
        </div>
    )
}