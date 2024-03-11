export interface Album {
    name:           string;
    albumArt:       AlbumArt;
    price:          number;
    singers:        string[];
    songs:          Song[];
    newRelesedDate: string;
    id:             number;
    tags:           string;
}

export interface AlbumArt {
    thumbnail: string;
}

export interface Song {
    duration: number;
    name:     string;
    singer:   string[];
}
