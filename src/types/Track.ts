import type { Album } from './Album';
import type { Artist } from './Artist';
import type { Image } from './Image';

export interface Track {
  id: string;
  title: string;
  duration: number;
  albumArt: Image;
  artists: Artist[];
  artistString: string;
  album: Album;
  trackNumber: number;
  diskNumber: number;
  explicit: boolean;
  lyricsId: number;
  library: boolean | null;
  streamUrl: string;
}
