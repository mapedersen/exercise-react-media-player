import { ReactElement } from "react";
import { IMedia } from "../interfaces";

import "./MediaPlayer.css"

interface ICurrentSongProps {
    song: IMedia;
}

export function MediaPlayer({ song }: ICurrentSongProps): ReactElement {
    return (
        <div className="currentSong">
            <img src={song.image} alt={song.title} ></img>

            <div className="addInfoLike">
                <span className="material-symbols-outlined"> Add </span>
                <div className="MediaInfoText text-center">
                    <p className="songArtist">{song.artist}</p>
                    <p>{song.title}</p>
                </div>
                <span className="material-symbols-outlined"> Favorite </span>
            </div>

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