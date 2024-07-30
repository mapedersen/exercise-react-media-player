import { ReactElement } from "react";
import { IMedia } from "../interfaces";


interface ICurrentSongProps {
    song: IMedia;
}

export function MediaPlayer({ song }: ICurrentSongProps): ReactElement {
    return (
        <div className="currentSong">
            Current Song
        </div>
    )
}